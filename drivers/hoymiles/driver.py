"""Hoymiles universal driver — auto-detects panel count, three-phase, hybrid and encryption."""

import asyncio
import json
import logging
import socket

from homey.driver import Driver
from hoymiles_wifi.dtu import DTU
from hoymiles_wifi.const import IS_ENCRYPTED_BIT_INDEX

_LOGGER = logging.getLogger(__name__)

_IS_ENCRYPTED_BIT = IS_ENCRYPTED_BIT_INDEX
_DTU_PORT = 10081


def _is_encrypted(dfs: int) -> bool:
    return bool((dfs >> _IS_ENCRYPTED_BIT) & 1)


def _local_subnet() -> str | None:
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        parts = ip.split(".")
        if len(parts) == 4:
            return ".".join(parts[:3])
    except Exception:
        pass
    return None


async def _tcp_open(ip: str, timeout: float) -> str | None:
    try:
        _, writer = await asyncio.wait_for(
            asyncio.open_connection(ip, _DTU_PORT), timeout=timeout
        )
        writer.close()
        await writer.wait_closed()
        return ip
    except Exception:
        return None


async def _discover_dtus(timeout: float = 1.5) -> list[str]:
    subnet = _local_subnet()
    if not subnet:
        return []
    tasks = [_tcp_open(f"{subnet}.{i}", timeout) for i in range(1, 255)]
    results = await asyncio.gather(*tasks)
    return [ip for ip in results if ip]


def _build_capabilities(panel_count: int, three_phase: bool, is_hybrid: bool) -> list:
    if is_hybrid:
        return [
            "meter_power.today",
            "measure_power",
            "meter_power",
            "measure_battery",
            "alarm_generic",
        ]

    caps = ["meter_power.today", "measure_power", "meter_power"]

    for i in range(1, panel_count + 1):
        caps.append(f"measure_power.pv{i}")
        caps.append(f"measure_voltage.pv{i}")
        caps.append(f"measure_current.pv{i}")

    if three_phase:
        for ph in ("a", "b", "c"):
            caps.append(f"measure_voltage.phase_{ph}")
            caps.append(f"measure_current.phase_{ph}")
    else:
        caps.append("measure_voltage")
        caps.append("measure_current")

    caps += ["measure_frequency", "measure_temperature", "alarm_generic"]
    return caps


def _build_capabilities_options(panel_count: int, three_phase: bool, is_hybrid: bool) -> dict:
    opts = {
        "measure_power": {
            "title": {"en": "Current Power", "nl": "Huidig Vermogen", "de": "Aktuelle Leistung",
                      "fr": "Puissance Actuelle", "it": "Potenza Attuale", "sv": "Aktuell Effekt",
                      "no": "Aktuell Effekt", "es": "Potencia Actual", "da": "Aktuel Effekt", "pl": "Aktualna Moc"},
            "units": {"en": "W"},
        },
        "meter_power.today": {
            "title": {"en": "Daily Energy", "nl": "Dagelijkse Energie", "de": "Tagesenergie",
                      "fr": "Énergie Journalière", "it": "Energia Giornaliera", "sv": "Daglig Energi",
                      "no": "Daglig Energi", "es": "Energía Diaria", "da": "Daglig Energi", "pl": "Dzienna Energia"},
            "units": {"en": "kWh"},
        },
        "meter_power": {
            "title": {"en": "Lifetime Energy", "nl": "Totale Energie", "de": "Gesamtenergie",
                      "fr": "Énergie Totale", "it": "Energia Totale", "sv": "Total Energi",
                      "no": "Total Energi", "es": "Energía Total", "da": "Total Energi", "pl": "Łączna Energia"},
            "units": {"en": "kWh"},
        },
        "alarm_generic": {
            "title": {"en": "Inverter Alarm", "nl": "Omvormer Alarm", "de": "Wechselrichter-Alarm",
                      "fr": "Alarme Onduleur", "it": "Allarme Inverter", "sv": "Växelriktarlarm",
                      "no": "Vekselretter-Alarm", "es": "Alarma Inversor", "da": "Vekselretter-Alarm",
                      "pl": "Alarm Falownika"},
        },
    }

    if is_hybrid:
        opts["measure_battery"] = {
            "title": {"en": "Battery State of Charge", "nl": "Accustand", "de": "Batterieladezustand",
                      "fr": "État de Charge de la Batterie", "it": "Stato di Carica della Batteria",
                      "sv": "Batteriladdningsstatus", "no": "Batteriladestatus",
                      "es": "Estado de Carga de la Batería", "da": "Batteriopladningsstatus",
                      "pl": "Stan Naładowania Baterii"},
        }
        return opts

    opts["measure_frequency"] = {
        "title": {"en": "Grid Frequency", "nl": "Netfrequentie", "de": "Netzfrequenz",
                  "fr": "Fréquence du Réseau", "it": "Frequenza di Rete", "sv": "Nätfrekvens",
                  "no": "Nettfrekvens", "es": "Frecuencia de Red", "da": "Netfrekvens",
                  "pl": "Częstotliwość Sieci"},
    }
    opts["measure_temperature"] = {
        "title": {"en": "Inverter Temperature", "nl": "Omvormer Temperatuur", "de": "Wechselrichter-Temperatur",
                  "fr": "Température de l'Onduleur", "it": "Temperatura Inverter",
                  "sv": "Växelriktartemperatur", "no": "Vekselretter-Temperatur",
                  "es": "Temperatura del Inversor", "da": "Vekselretter-Temperatur",
                  "pl": "Temperatura Falownika"},
    }

    if three_phase:
        for ph, label in (("a", "A"), ("b", "B"), ("c", "C")):
            opts[f"measure_voltage.phase_{ph}"] = {
                "title": {"en": f"Voltage Phase {label}", "nl": f"Spanning Fase {label}",
                          "de": f"Spannung Phase {label}", "fr": f"Tension Phase {label}",
                          "it": f"Tensione Fase {label}", "sv": f"Spänning Fas {label}",
                          "no": f"Spenning Fase {label}", "es": f"Tensión Fase {label}",
                          "da": f"Spænding Fase {label}", "pl": f"Napięcie Faza {label}"},
            }
            opts[f"measure_current.phase_{ph}"] = {
                "title": {"en": f"Current Phase {label}", "nl": f"Stroom Fase {label}",
                          "de": f"Strom Phase {label}", "fr": f"Courant Phase {label}",
                          "it": f"Corrente Fase {label}", "sv": f"Ström Fas {label}",
                          "no": f"Strøm Fase {label}", "es": f"Corriente Fase {label}",
                          "da": f"Strøm Fase {label}", "pl": f"Prąd Faza {label}"},
            }
    else:
        opts["measure_voltage"] = {
            "title": {"en": "AC Voltage", "nl": "AC-Spanning", "de": "AC-Spannung",
                      "fr": "Tension AC", "it": "Tensione CA", "sv": "AC-Spänning",
                      "no": "AC-Spenning", "es": "Tensión CA", "da": "AC-Spænding", "pl": "Napięcie AC"},
        }
        opts["measure_current"] = {
            "title": {"en": "AC Current", "nl": "AC-Stroom", "de": "AC-Strom",
                      "fr": "Courant AC", "it": "Corrente CA", "sv": "AC-Ström",
                      "no": "AC-Strøm", "es": "Corriente CA", "da": "AC-Strøm", "pl": "Prąd AC"},
        }

    for i in range(1, panel_count + 1):
        opts[f"measure_power.pv{i}"] = {
            "title": {"en": f"Panel {i} Power", "nl": f"Paneel {i} Vermogen", "de": f"Panel {i} Leistung",
                      "fr": f"Panneau {i} Puissance", "it": f"Pannello {i} Potenza",
                      "sv": f"Panel {i} Effekt", "no": f"Panel {i} Effekt",
                      "es": f"Panel {i} Potencia", "da": f"Panel {i} Effekt", "pl": f"Panel {i} Moc"},
            "units": {"en": "W"},
        }
        opts[f"measure_voltage.pv{i}"] = {
            "title": {"en": f"Panel {i} Voltage", "nl": f"Paneel {i} Spanning", "de": f"Panel {i} Spannung",
                      "fr": f"Panneau {i} Tension", "it": f"Pannello {i} Tensione",
                      "sv": f"Panel {i} Spänning", "no": f"Panel {i} Spenning",
                      "es": f"Panel {i} Tensión", "da": f"Panel {i} Spænding", "pl": f"Panel {i} Napięcie"},
            "units": {"en": "V"},
        }
        opts[f"measure_current.pv{i}"] = {
            "title": {"en": f"Panel {i} Current", "nl": f"Paneel {i} Stroom", "de": f"Panel {i} Strom",
                      "fr": f"Panneau {i} Courant", "it": f"Pannello {i} Corrente",
                      "sv": f"Panel {i} Ström", "no": f"Panel {i} Strøm",
                      "es": f"Panel {i} Corriente", "da": f"Panel {i} Strøm", "pl": f"Panel {i} Prąd"},
            "units": {"en": "A"},
        }

    return opts


class HoymilesDriver(Driver):

    async def on_init(self) -> None:
        self.log("HoymilesDriver (Python) init")

    async def on_pair(self, session) -> None:
        self.log("onPair started")
        found_dtus: list[dict] = []

        async def _query_dtu(ip: str, manual_sn: str = "") -> dict | None:
            """Query a single DTU — same detection logic as the HA integration."""
            dtu = DTU(ip, timeout=10)

            # 1. app_info — always available (DTU on even at night)
            try:
                app_info = await asyncio.wait_for(dtu.async_app_information_data(), timeout=10)
            except Exception:
                return None
            if not app_info:
                return None

            dtu_sn       = str(app_info.dtu_serial_number or "") or manual_sn
            is_encrypted = False
            enc_rand     = ""

            if app_info.dtu_info:
                di = app_info.dtu_info
                if di.dfs and _is_encrypted(di.dfs):
                    is_encrypted = True
                    enc_rand = di.enc_rand.hex() if di.enc_rand else ""
                    dtu = DTU(ip, timeout=10, is_encrypted=True,
                              enc_rand=bytes.fromhex(enc_rand))
                    await asyncio.sleep(2)

            # 2. real_data — detect three_phase and panel count
            panel_count   = int(app_info.pv_number or 0) or 2
            three_phase   = False
            is_hybrid     = False
            inverter_sns  = []

            try:
                real_data = await asyncio.wait_for(dtu.async_get_real_data_new(), timeout=8)
            except Exception:
                real_data = None

            if real_data:
                pv_count = len(real_data.pv_data or [])
                if pv_count:
                    panel_count = pv_count
                three_phase = len(real_data.tgs_data or []) > 0
                dtu_sn = str(real_data.device_serial_number or "") or dtu_sn
            else:
                # Inverter sleeping — try hybrid (gateway) path
                try:
                    gw = await asyncio.wait_for(dtu.async_get_gateway_info(), timeout=8)
                    if gw:
                        dtu_sn    = str(gw.serial_number or "") or dtu_sn
                        is_hybrid = True
                        try:
                            registry = await asyncio.wait_for(
                                dtu.async_get_energy_storage_registry(
                                    dtu_serial_number=int(dtu_sn)
                                ), timeout=8
                            )
                            if registry:
                                inverter_sns = [
                                    str(inv.serial_number)
                                    for inv in (registry.inverters or [])
                                ]
                        except Exception:
                            pass
                except Exception:
                    pass

            self.log(f"DTU {ip} — SN:{dtu_sn} panels:{panel_count} 3ph:{three_phase} hybrid:{is_hybrid} enc:{is_encrypted}")

            return {
                "ip":            ip,
                "dtu_sn":        dtu_sn,
                "panel_count":   panel_count,
                "three_phase":   three_phase,
                "is_hybrid":     is_hybrid,
                "inverter_sns":  inverter_sns,
                "is_encrypted":  is_encrypted,
                "enc_rand":      enc_rand,
            }

        async def on_login(data: dict) -> bool:
            nonlocal found_dtus
            host      = str(data.get("username", "")).strip()
            manual_sn = str(data.get("password", "")).strip()
            self.log(f"login — ip: '{host}' sn_fallback: '{manual_sn}'")

            if not host:
                self.log("No IP entered — scanning network for Hoymiles DTU...")
                ips = await _discover_dtus(timeout=1.5)
                self.log(f"Network scan found: {ips}")
                if not ips:
                    raise Exception(self.homey.__("error.no_dtu_found"))
                results = await asyncio.gather(*[_query_dtu(ip) for ip in ips])
                found_dtus = [r for r in results if r]
            else:
                octets = host.split(".")
                if len(octets) != 4 or not all(o.isdigit() and 0 <= int(o) <= 255 for o in octets):
                    raise Exception(self.homey.__("error.invalid_ip", {"ip": host}))
                info = await _query_dtu(host, manual_sn)
                if not info:
                    raise Exception(self.homey.__("error.cannot_reach", {"ip": host}))
                found_dtus = [info]

            if not found_dtus:
                raise Exception(self.homey.__("error.no_dtu_responded"))

            for d in found_dtus:
                self.log(f"login OK — {d['ip']} SN:{d['dtu_sn']} panels:{d['panel_count']} 3ph:{d['three_phase']} hybrid:{d['is_hybrid']}")
            return True

        async def on_list_devices(data: dict = None) -> list:
            if not found_dtus:
                raise Exception(self.homey.__("error.no_devices"))

            devices = []
            for d in found_dtus:
                ip      = d["ip"]
                sn      = d["dtu_sn"]
                count   = d["panel_count"]
                three   = d["three_phase"]
                hybrid  = d["is_hybrid"]
                dev_id  = f"hoymiles_{sn or ip.replace('.', '_')}"
                name    = f"Hoymiles DTU {sn}" if sn else f"Hoymiles DTU ({ip})"
                self.log(f"list_devices — {name} panels:{count} 3ph:{three} hybrid:{hybrid}")
                devices.append({
                    "name":                name,
                    "data":                {"id": dev_id},
                    "capabilities":        _build_capabilities(count, three, hybrid),
                    "capabilitiesOptions": _build_capabilities_options(count, three, hybrid),
                    "settings": {
                        "ip":               ip,
                        "dtu_sn":           sn,
                        "panel_count":      count,
                        "three_phase":      three,
                        "is_hybrid":        hybrid,
                        "inverter_sns":     json.dumps(d["inverter_sns"]),
                        "polling_interval": 60,
                        "is_encrypted":     d["is_encrypted"],
                        "enc_rand":         d["enc_rand"],
                    },
                })
            return devices

        session.set_handler("login",        on_login)
        session.set_handler("list_devices", on_list_devices)


homey_export = HoymilesDriver
