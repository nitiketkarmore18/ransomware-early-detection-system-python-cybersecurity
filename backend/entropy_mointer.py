import numpy as np

def calculate_entropy(data: bytes) -> float:
    """Calculate the Shannon entropy of input bytes."""
    if not data or len(data) == 0:
        return 0.0
    counts = np.bincount(np.frombuffer(data, dtype=np.uint8), minlength=256)
    probs = counts / len(data)
    probs = probs[probs > 0]
    return float(-np.sum(probs * np.log2(probs)))

def classify_file(data: bytes, filename: str) -> dict:
    """
    Classify a file as 'danger', 'suspicious', or 'safe' using entropy and size.
    - Danger: entropy ≥ 7.8 and size > 400 bytes
    - Suspicious: entropy ≥ 6.8 and size ≤ 120 bytes
    - Safe: all others
    """
    entropy = calculate_entropy(data)
    size = len(data)
    entropy_threshold = 7.8
    suspicious_entropy = 6.8
    suspicious_size = 120  # bytes

    if entropy >= entropy_threshold and size > 400:
        level = "danger"
    elif entropy >= suspicious_entropy and size <= suspicious_size:
        level = "suspicious"
    else:
        level = "safe"
    return {
        "name": filename,
        "entropy": entropy,
        "size": size,
        "level": level
    }
