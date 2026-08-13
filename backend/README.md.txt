# 🛡️ Ransomware Early Warning System

This project detects potentially **encrypted or ransomware-affected files** by monitoring file entropy and automatically classifying new or modified files as **Safe**, **Suspicious**, or **Dangerous** in real-time.

---

## 🚀 Features

- 📂 **Automatic Folder Monitoring** — Detects when files are created or modified.
- 🧮 **Entropy-Based Detection** — Calculates Shannon entropy to identify encryption or compression.
- ⚡ **Real-Time Alerts** — Updates classification immediately upon any file change.
- 💾 **JSON Reporting** — Saves all analysis results into a structured JSON file (`entropy_results.json`).
- 🧠 **Smart Classification**  
  - **Safe** — Normal files with low entropy.  
  - **Suspicious** — Possibly compressed or partially encrypted files.  
  - **Danger** — High-entropy encrypted or ransomware-like files.

---

## 🧰 Tech Stack

- **Python 3.8+**
- **Libraries:**  
  - `numpy` – for entropy calculation  
  - `watchdog` – for real-time folder monitoring  
  - `json`, `os`, `math` – for file handling and output storage

---

## 🏗️ Project Structure

