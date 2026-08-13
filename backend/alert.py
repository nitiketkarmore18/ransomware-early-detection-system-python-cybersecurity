import tkinter as tk
from tkinter import messagebox

def show_alert(name, pid, speed, open_files):
    root = tk.Tk()
    root.withdraw()
    messagebox.showwarning(
        "⚠️ Ransomware Early Warning",
        f"Suspicious process detected!\n\n"
        f"Process: {name}\nPID: {pid}\nWrite Speed: {speed} KB/s\nOpen Files: {open_files}\n\n"
        f"Possible encryption activity detected!"
    )
    root.destroy()
