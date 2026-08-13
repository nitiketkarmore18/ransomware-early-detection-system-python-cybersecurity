import psutil
import time

def get_suspicious_process(write_speed_threshold=400, open_file_limit=200):
    """
    Scan all running processes and return the first suspicious process
    with write speed (KB/sec) above write_speed_threshold and open files
    count above open_file_limit.
    """
    for proc in psutil.process_iter(['pid', 'name', 'io_counters', 'open_files']):
        try:
            io = proc.info['io_counters']
            if io:
                # Calculate approximate write speed in KB (using cumulative write bytes)
                write_speed = io.write_bytes / 1024  
                open_files = len(proc.info['open_files'] or [])
                if write_speed > write_speed_threshold and open_files > open_file_limit:
                    return {
                        "pid": proc.info['pid'],
                        "name": proc.info['name'],
                        "write_speed": round(write_speed, 2),
                        "open_files": open_files
                    }
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            continue
    return None


def start_process_monitor(poll_interval=5):
    """
    Background process monitor that prints suspicious process info repeatedly
    every poll_interval seconds.
    """
    print("[*] Process monitor running (background)...")
    try:
        while True:
            suspicious = get_suspicious_process()
            if suspicious:
                print(f"[ALERT] Suspicious process detected: {suspicious}")
            time.sleep(poll_interval)
    except KeyboardInterrupt:
        print("\n[*] Process monitor stopped by user.")
