"""
Hoymiles DTU diagnostic script.
Usage: python test_dtu.py <ip>
Example: python test_dtu.py 192.168.0.81
"""

import asyncio
import socket
import sys

DTU_PORT = 10081


def check_port(ip: str, port: int, timeout: float = 5.0) -> bool:
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(timeout)
        result = s.connect_ex((ip, port))
        s.close()
        return result == 0
    except Exception:
        return False


def _is_encrypted(dfs: int) -> bool:
    try:
        from hoymiles_wifi.const import IS_ENCRYPTED_BIT_INDEX
        return bool((dfs >> IS_ENCRYPTED_BIT_INDEX) & 1)
    except Exception:
        return False


def _fmt(val, divisor=1, unit="", fallback="—"):
    if val is None:
        return fallback
    return f"{val / divisor:.1f} {unit}".strip() if unit else f"{val / divisor}"


async def test_dtu(ip: str) -> None:
    print(f"\n{'='*52}")
    print(f"  Hoymiles DTU Diagnostic")
    print(f"  Target: {ip}")
    print(f"{'='*52}\n")

    # ── 1. TCP port ────────────────────────────────────────
    print(f"[1] TCP port {DTU_PORT}... ", end="", flush=True)
    if not check_port(ip, DTU_PORT):
        print("CLOSED / TIMEOUT")
        print("\n❌ Port 10081 not reachable. Check:")
        print("   - DTU powered on and connected to Wi-Fi")
        print("   - Correct IP address")
        print("   - No firewall blocking port 10081")
        return
    print("OPEN ✓")

    # ── import library ─────────────────────────────────────
    try:
        from hoymiles_wifi.dtu import DTU
    except ImportError:
        print("\n❌ hoymiles-wifi not installed. Run: pip install hoymiles-wifi")
        return

    # ── 2. app_info (unencrypted) ──────────────────────────
    print(f"[2] app_info (unencrypted)... ", end="", flush=True)
    dtu = DTU(ip, timeout=10)
    app_info = None
    try:
        app_info = await asyncio.wait_for(dtu.async_app_information_data(), timeout=10)
        print("OK ✓")
    except asyncio.TimeoutError:
        print("TIMEOUT")
    except ConnectionRefusedError:
        print("REFUSED")
    except Exception as e:
        print(f"FAILED ({type(e).__name__}: {e})")

    is_encrypted = False
    enc_rand     = b""

    if app_info:
        dtu_sn = str(app_info.dtu_serial_number or "—")
        pv_num = app_info.pv_number or 0
        print(f"\n   Serial       : {dtu_sn}")
        print(f"   PV panels    : {pv_num}")

        if app_info.dtu_info:
            di = app_info.dtu_info
            sw  = di.wifi_version or di.dtu_sw_version or "—"
            hw  = di.dtu_hw_version or "—"
            sig = f"{di.signal_strength}%" if di.signal_strength is not None else "—"
            print(f"   SW version   : {sw}")
            print(f"   HW version   : {hw}")
            print(f"   Signal       : {sig}")
            print(f"   DFS flags    : {di.dfs}")

            if di.dfs and _is_encrypted(di.dfs):
                is_encrypted = True
                enc_rand     = di.enc_rand or b""
                print(f"   enc_rand     : {enc_rand.hex()}")
                print(f"\n⚠️  DTU Pro-S — encrypted mode detected")
                # Rebuild with encryption
                if enc_rand:
                    dtu = DTU(ip, timeout=10, is_encrypted=True, enc_rand=enc_rand)
                    await asyncio.sleep(2)
            else:
                print(f"\n✓  No encryption (standard DTU)")
    else:
        # ── 3. encrypted probe ─────────────────────────────
        print(f"[3] Encrypted probe... ", end="", flush=True)
        dtu_enc = DTU(ip, timeout=10, is_encrypted=True, enc_rand=b"\x00" * 16)
        try:
            r = await asyncio.wait_for(dtu_enc.async_app_information_data(), timeout=10)
            if r:
                print("RESPONDED")
                print(f"\n⚠️  DTU only accepts encrypted connections.")
                print(f"   Serial: {r.dtu_serial_number}")
            else:
                print("NO DATA")
        except asyncio.TimeoutError:
            print("TIMEOUT")
            print("\n❌ DTU does not respond to any connection attempt.")
        except Exception as e:
            print(f"FAILED ({type(e).__name__}: {e})")
        print(f"\n{'='*52}")
        print("  Please copy this output and send to the developer.")
        print(f"{'='*52}\n")
        return

    # ── 4. config (Wi-Fi / SSID) ───────────────────────────
    print(f"\n[3] Config (Wi-Fi / SSID)... ", end="", flush=True)
    try:
        config = await asyncio.wait_for(dtu.async_get_config(), timeout=8)
        if config:
            print("OK ✓")
            print(f"   Wi-Fi SSID   : {config.wifi_ssid or '—'}")
            print(f"   DTU AP SSID  : {config.dtu_ap_ssid or '—'}")
        else:
            print("NO DATA")
    except Exception as e:
        print(f"FAILED ({e})")

    # ── 5. real data ───────────────────────────────────────
    print(f"\n[4] Live data... ", end="", flush=True)
    real = None
    try:
        real = await asyncio.wait_for(dtu.async_get_real_data_new(), timeout=10)
        if real:
            print("OK ✓")
        else:
            print("NO DATA (inverter sleeping)")
    except Exception as e:
        print(f"FAILED ({e})")

    if real:
        power_w  = (real.dtu_power or 0) / 10
        today_kw = (real.dtu_daily_energy or 0) / 1000
        three_ph = len(real.tgs_data or []) > 0
        print(f"\n   AC power     : {power_w:.1f} W")
        print(f"   Daily energy : {today_kw:.3f} kWh")
        print(f"   Three-phase  : {'yes' if three_ph else 'no'}")

        if real.pv_data:
            print(f"\n   PV panels ({len(real.pv_data)}):")
            for idx, pv in enumerate(real.pv_data, start=1):
                p = _fmt(pv.power,   10,  "W")
                v = _fmt(pv.voltage, 10,  "V")
                i = _fmt(pv.current, 100, "A")
                e = _fmt(pv.energy_total, 1000, "kWh")
                print(f"     PV{idx}: {p:>8}  {v:>7}  {i:>7}  total={e}")

        if real.sgs_data:
            sgs = real.sgs_data[0]
            print(f"\n   AC (single-phase):")
            print(f"     Voltage    : {_fmt(sgs.voltage, 10, 'V')}")
            print(f"     Current    : {_fmt(sgs.current, 100, 'A')}")
            print(f"     Frequency  : {_fmt(sgs.frequency, 100, 'Hz')}")
            print(f"     Temperature: {_fmt(sgs.temperature, 10, '°C')}")
            print(f"     Warning    : {sgs.warning_number or 0}")

        if real.tgs_data:
            tgs = real.tgs_data[0]
            print(f"\n   AC (three-phase):")
            for ph, va, ia in (
                ("A", tgs.voltage_phase_A, tgs.current_phase_A),
                ("B", tgs.voltage_phase_B, tgs.current_phase_B),
                ("C", tgs.voltage_phase_C, tgs.current_phase_C),
            ):
                print(f"     Phase {ph}: {_fmt(va, 10, 'V')}  {_fmt(ia, 100, 'A')}")
            print(f"     Frequency  : {_fmt(tgs.frequency, 100, 'Hz')}")
            print(f"     Temperature: {_fmt(tgs.temperature, 10, '°C')}")

    # ── 6. hybrid probe ────────────────────────────────────
    print(f"\n[5] Hybrid/gateway probe... ", end="", flush=True)
    try:
        gw = await asyncio.wait_for(dtu.async_get_gateway_info(), timeout=8)
        if gw:
            print("FOUND ✓")
            print(f"   Gateway SN   : {gw.serial_number}")
            print(f"   ⚠️  Hybrid system detected")
        else:
            print("not hybrid")
    except Exception as e:
        print(f"n/a ({type(e).__name__})")

    # ── summary ────────────────────────────────────────────
    print(f"\n{'='*52}")
    print(f"  Summary")
    print(f"{'='*52}")
    print(f"  IP            : {ip}")
    print(f"  Encrypted     : {'YES — DTU Pro-S' if is_encrypted else 'No'}")
    if app_info:
        print(f"  Serial        : {app_info.dtu_serial_number or '—'}")
        print(f"  Panels        : {app_info.pv_number or '—'}")
    if real:
        print(f"  AC power now  : {(real.dtu_power or 0) / 10:.1f} W")
        print(f"  Daily energy  : {(real.dtu_daily_energy or 0) / 1000:.3f} kWh")
    print(f"{'='*52}")
    print(f"  Please copy this output and send to the developer.")
    print(f"{'='*52}\n")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python test_dtu.py <ip>")
        print("Example: python test_dtu.py 192.168.0.81")
        sys.exit(1)
    asyncio.run(test_dtu(sys.argv[1]))
