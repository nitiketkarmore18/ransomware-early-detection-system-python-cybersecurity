import time
import os
import json
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from entropy_mointer import classify_file

WATCH_FOLDER = "test_files"
RESULTS_PATH = "entropy_results.json"

def analyze_and_write_results():
    results = []
    for fname in os.listdir(WATCH_FOLDER):
        if fname.lower().endswith(".txt"):
            fpath = os.path.join(WATCH_FOLDER, fname)
            with open(fpath, "rb") as f:
                data = f.read()
                result = classify_file(data, fname)
                results.append(result)
    with open(RESULTS_PATH, "w") as f:
        json.dump(results, f, indent=4)
    print("✅ JSON updated with latest file entropies")

class WatcherHandler(FileSystemEventHandler):
    def on_created(self, event):
        if not event.is_directory and event.src_path.lower().endswith(".txt"):
            print(f"🆕 New file detected: {os.path.basename(event.src_path)}")
            analyze_and_write_results()

    def on_modified(self, event):
        if not event.is_directory and event.src_path.lower().endswith(".txt"):
            print(f"✏️ File modified: {os.path.basename(event.src_path)}")
            analyze_and_write_results()

if __name__ == "__main__":
    print(f"👀 Watching folder: {WATCH_FOLDER}")
    analyze_and_write_results()

    event_handler = WatcherHandler()
    observer = Observer()
    observer.schedule(event_handler, WATCH_FOLDER, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(2)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
