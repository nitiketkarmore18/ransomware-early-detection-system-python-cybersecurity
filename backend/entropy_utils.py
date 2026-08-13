import math

def calculate_entropy(data_bytes):
    if not data_bytes:
        return 0.0
    freq = {}
    for b in data_bytes:
        freq[b] = freq.get(b, 0) + 1
    entropy = 0.0
    length = len(data_bytes)
    for count in freq.values():
        p = count / length
        entropy -= p * math.log2(p)
    return entropy

