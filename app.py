"""Hoymiles Wi-Fi Solar Panel — Python runtime."""

from homey.app import App


class HoymilesApp(App):

    async def on_init(self) -> None:
        await super().on_init()
        self.log("gpm.hoymiles.solarpanel started")

    async def on_uninit(self) -> None:
        self.log("App stopped")


homey_export = HoymilesApp
