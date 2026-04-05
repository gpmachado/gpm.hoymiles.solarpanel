"""
Hoymiles DTU connection test script.
Usage: python test_dtu.py <ip>
Example: python test_dtu.py 192.168.0.81
"""

import asyncio
import socket
import sys

DTU_PORT = 10081


def check_port(ip: str, port: int, timeout: float = 5.0) -> str:
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(timeout)
        result = s.connect_ex((ip, port))
        s.close()
        return "open" if result == 0 else f"closed (code {result})"
    except socket.timeout:
        return "timeout (no response)"
    except Exception as e:
        return f"error: {e}"


async def test_dtu(ip: str) -> None:
    print(f"\n{'='*50}")
    print(f"Hoymiles DTU connection test")
    print(f"Target: {ip}")
    print(f"{'='*50}\n")

    # 1. TCP port check
    print(f"[1] TCP port {DTU_PORT}... ", end="", flush=True)
    port_status = check_port(ip, DTU_PORT)
    print(port_status)

    if "timeout" in port_status or "closed" in port_status:
        print("\n❌ Port 10081 is not reachable. The DTU is either:")
        print("   - Off or not connected to Wi-Fi")
        print("   - On a different IP address")
        print("   - Blocking connections (firewall or firmware restriction)")
        return

    # 2. Try without encryption
    try:
        from hoymiles_wifi.dtu import DTU
    except ImportError:
        print("\n❌ hoymiles-wifi library not installed.")
        print("   Run: pip install hoymiles-wifi")
        return

    print(f"\n[2] Connecting without encryption... ", end="", flush=True)
    dtu = DTU(ip, timeout=10)
    app_info = None
    try:
        app_info = await asyncio.wait_for(dtu.async_app_information_data(), timeout=10)
        print("OK")
    except asyncio.TimeoutError:
        print("TIMEOUT")
    except ConnectionRefusedError:
        print("REFUSED")
    except Exception as e:
        print(f"FAILED ({type(e).__name__}: {e})")

    if app_info:
        print(f"\n✅ DTU responded (unencrypted)")
        print(f"   Serial number : {app_info.dtu_serial_number}")
        print(f"   PV panels     : {app_info.pv_number}")
        if app_info.dtu_info:
            di = app_info.dtu_info
            print(f"   SW version    : {di.wifi_version or di.dtu_sw_version}")
            print(f"   HW version    : {di.dtu_hw_version}")
            print(f"   Signal        : {di.signal_strength}")
            print(f"   DFS flags     : {di.dfs}")
            if di.enc_rand:
                print(f"   enc_rand      : {di.enc_rand.hex()}")
                print(f"\n⚠️  Encryption key detected — DTU uses encrypted mode")
            else:
                print(f"\n✅ No encryption required")
        return

    # 3. Try with encryption (empty enc_rand — just to check if DTU responds at all)
    print(f"\n[3] Connecting with encrypted mode (probe)... ", end="", flush=True)
    dtu_enc = DTU(ip, timeout=10, is_encrypted=True, enc_rand=b"\x00" * 16)
    try:
        app_info_enc = await asyncio.wait_for(dtu_enc.async_app_information_data(), timeout=10)
        if app_info_enc:
            print("RESPONDED")
            print(f"\n⚠️  DTU only accepts encrypted connections.")
            print(f"   Serial number : {app_info_enc.dtu_serial_number}")
        else:
            print("NO DATA")
    except asyncio.TimeoutError:
        print("TIMEOUT")
        print("\n❌ DTU does not respond to encrypted probe either.")
        print("   This firmware version may use a different protocol.")
    except Exception as e:
        print(f"FAILED ({type(e).__name__}: {e})")
        print(f"\n❌ Encrypted probe failed.")

    # 4. Real data attempt
    print(f"\n[4] Requesting live data (unencrypted)... ", end="", flush=True)
    dtu2 = DTU(ip, timeout=10)
    try:
        real = await asyncio.wait_for(dtu2.async_get_real_data_new(), timeout=10)
        if real:
            print("OK")
            print(f"   DTU power     : {(real.dtu_power or 0) / 10} W")
            print(f"   Daily energy  : {(real.dtu_daily_energy or 0) / 1000} kWh")
        else:
            print("NO DATA (inverter may be sleeping)")
    except Exception as e:
        print(f"FAILED ({type(e).__name__}: {e})")

    print(f"\n{'='*50}")
    print("Please copy this output and send it to the developer.")
    print(f"{'='*50}\n")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python test_dtu.py <ip>")
        print("Example: python test_dtu.py 192.168.0.81")
        sys.exit(1)
    asyncio.run(test_dtu(sys.argv[1]))
