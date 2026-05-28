"""Hoymiles Wi-Fi Solar Panel — Python runtime."""

import json
import os
from collections.abc import Mapping
from typing import Any

from homey.app import App

# ── Debug verbosity ───────────────────────────────────────────────────────────
# True  → one log line per poll (solar W + daily kWh) — homey app run --remote
# False → silent (production)
# Flip this ONE constant instead of hunting across device.py.
DEBUG_LOG = False
# ─────────────────────────────────────────────────────────────────────────────


def _app_version() -> str:
    try:
        manifest = os.path.join(os.path.dirname(__file__), "app.json")
        with open(manifest, encoding="utf-8") as f:
            return json.load(f).get("version", "unknown")
    except Exception:
        return "unknown"


class HoymilesApp(App):

    async def on_init(self) -> None:
        await super().on_init()
        self.log(f"gpm.hoymiles.solarpanel v{_app_version()} started")
        self._register_flow_conditions()

    async def on_uninit(self) -> None:
        self.log("App stopped")

    def _register_flow_conditions(self) -> None:
        """Register run listeners for condition flow cards."""

        async def _is_solar_producing(
            card_arguments: Mapping[str, Any], **kwargs: Any
        ) -> bool:
            device = card_arguments.get("device")
            if not device:
                return False
            power = device.get_capability_value("measure_power") or 0
            return float(power) > 5.0

        try:
            self.homey.flow.get_condition_card("is_solar_producing") \
                .register_run_listener(_is_solar_producing)
        except Exception as e:
            self.log(f"Flow condition registration failed: {e}")


homey_export = HoymilesApp
