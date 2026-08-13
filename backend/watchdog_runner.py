import os
import json
from entropy_mointer import classify_file
WATCH_FOLDER = r"D:\projects\Ransomware_Early_Warning\backend\test_files"
RESULTS_PATH = "entropy_results.json"

def analyze_folder_and_write_results():
    results = []
    for fname in os.listdir(WATCH_FOLDER):
        if fname.lower().endswith(".txt"):
            fpath = os.path.join(WATCH_FOLDER, fname)
            with open(fpath, "rb") as f:
                data = f.read()
                result = classify_file(data, fname)
                results.append(result)
    with open(RESULTS_PATH, "w") as f:
        json.dump(results, f)

if __name__ == "__main__":
    analyze_folder_and_write_results()
