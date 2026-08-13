import os
import json
import math
import traceback

# Folder containing files to analyze (relative to this script)
INPUT_FOLDER = "test_files"

# Output JSON name (written to the same folder as this script)
OUTPUT_FILE = "entropy_results.json"

def calculate_entropy(file_path):
    """Calculate Shannon entropy of a file (byte-level)."""
    try:
        with open(file_path, "rb") as f:
            data = f.read()
    except Exception:
        # If file can't be read, return None to indicate an error
        return None

    if not data:
        return 0.0

    freq = [0] * 256
    for b in data:
        freq[b] += 1

    entropy = 0.0
    length = len(data)
    for count in freq:
        if count:
            p = count / length
            entropy -= p * math.log2(p)
    return entropy

def classify_entropy(entropy_value):
    if entropy_value is None:
        return "error"
    if entropy_value >= 7.8:
        return "danger"
    elif entropy_value >= 6.9:
        return "suspicious"
    else:
        return "safe"

def analyze_files(folder_path):
    results = []
    # Use sorted list to make output deterministic
    try:
        entries = sorted(os.listdir(folder_path))
    except FileNotFoundError:
        print(f"Folder not found: {folder_path}")
        return results

    for name in entries:
        # skip hidden files and directories
        if name.startswith("."):
            continue
        file_path = os.path.join(folder_path, name)
        if not os.path.isfile(file_path):
            continue

        try:
            size = os.path.getsize(file_path)
            entropy_val = calculate_entropy(file_path)
            level = classify_entropy(entropy_val)
            # round entropy to 4 decimal places for readability
            entropy_rounded = round(entropy_val, 4) if entropy_val is not None else None

            results.append({
                "name": name,
                "size": size,
                "entropy": entropy_rounded,
                "level": level
            })
        except Exception:
            # keep processing other files even if one fails
            print(f"Error analyzing {file_path}:\n{traceback.format_exc()}")
            results.append({
                "name": name,
                "size": None,
                "entropy": None,
                "level": "error"
            })

    # Optionally sort results by entropy descending (danger at top)
    results.sort(key=lambda r: (r["entropy"] is not None, r["entropy"]), reverse=True)
    return results

def write_results(output_path, data):
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    print(f"✅ Wrote {len(data)} entries to {output_path}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))  # backend folder
    input_folder = os.path.join(base_dir, INPUT_FOLDER)
    output_file = os.path.join(base_dir, OUTPUT_FILE)

    results = analyze_files(input_folder)
    write_results(output_file, results)
