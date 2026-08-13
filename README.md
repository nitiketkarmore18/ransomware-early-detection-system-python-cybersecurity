# 🛡️ Ransomware Early Warning & Detection System

A Python-based cybersecurity system designed to provide **early warning against potential ransomware activity** by monitoring file-system behavior, analyzing file entropy, tracking suspicious processes, and generating security alerts through a web-based monitoring dashboard.

The system combines a **Python monitoring and detection backend** with a **React-based frontend dashboard** to provide a centralized view of suspicious file activity and ransomware-related indicators.

---

## 📌 Project Overview

Ransomware attacks often cause rapid and widespread file modifications, encryption, and abnormal changes in file entropy.

This project focuses on detecting these behavioral indicators at an early stage rather than waiting for a ransomware attack to completely encrypt a system.

The system continuously monitors selected file-system activity and analyzes files using **Shannon entropy**. Files exhibiting unusually high entropy can indicate encryption or other suspicious transformations.

The project also includes process monitoring and folder watching components to provide multiple signals for ransomware detection.

### Core Detection Concept

The system uses file entropy as one of the primary indicators.

A file with highly random or encrypted-looking content generally has higher Shannon entropy than normal text or structured files.

The system therefore evaluates:

- File entropy
- File size
- File activity
- Suspicious process activity
- Folder/file-system changes

These signals are used to classify file activity into different risk levels and generate alerts when suspicious behavior is detected.

---

## 🎯 Objectives

The main objectives of this project are:

- Detect potential ransomware activity at an early stage.
- Monitor file-system activity continuously.
- Calculate Shannon entropy for monitored files.
- Identify files exhibiting suspiciously high entropy.
- Monitor running processes for potentially suspicious activity.
- Track changes within monitored folders.
- Generate security alerts based on detected activity.
- Provide a centralized web dashboard for monitoring results.
- Demonstrate a practical cybersecurity detection architecture using Python and React.

---

## 🚀 Key Features

### 🔍 File Entropy Analysis

The system calculates the Shannon entropy of files to determine the randomness of their contents.

Entropy values are used to classify files into different risk levels.

Typical interpretation:

| Entropy Level | Interpretation |
|---|---|
| Low | Normal / structured content |
| Medium | Potentially unusual content |
| High | Potentially encrypted or suspicious content |

The project uses a high-entropy threshold as one of the indicators for detecting potentially encrypted files.

---

### 📁 Folder Monitoring

The system monitors file-system activity through the folder watcher component.

It can detect file-related activity and trigger further analysis when relevant changes occur.

This allows the system to react to file-system behavior instead of relying only on manual scanning.

---

### ⚙️ Process Monitoring

The project includes process monitoring functionality to observe running processes and identify potentially suspicious activity.

This provides an additional detection signal alongside entropy analysis.

---

### 🚨 Security Alerts

Suspicious activity can be processed by the alerting component.

The alert mechanism is designed to provide an early indication when monitored activity crosses the configured detection criteria.

---

### 📊 Entropy Aggregation

The system includes an entropy aggregation component that processes entropy analysis results and helps organize the collected file-analysis information.

---

### 🖥️ Web Dashboard

A React-based frontend provides a visual interface for monitoring the ransomware detection system.

The dashboard contains components for:

- Security alerts
- Entropy visualization
- Analysis results
- Monitoring information
- Project information
- Navigation
- Dashboard sections

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────────┐
                    │      File System        │
                    │  Monitored Directories  │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Folder Watcher      │
                    │   File Activity Monitor  │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Entropy Analysis     │
                    │    Shannon Entropy      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   Entropy Aggregator    │
                    │   Risk Classification   │
                    └────────────┬────────────┘
                                 │
                  ┌──────────────┴──────────────┐
                  │                             │
                  ▼                             ▼
       ┌─────────────────────┐       ┌─────────────────────┐
       │ Process Monitoring  │       │   Alert Detection   │
       │                     │       │                     │
       └──────────┬──────────┘       └──────────┬──────────┘
                  │                             │
                  └──────────────┬──────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Backend / API       │
                    │        Python           │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    React Dashboard      │
                    │ Visualization & Alerts  │
                    └─────────────────────────┘
🧠 Detection Methodology
Shannon Entropy

The project uses Shannon entropy to measure the randomness of file contents.

The entropy of a file can be represented as:

H(X) = -Σ p(x) log₂ p(x)

where:

H(X) represents entropy.
p(x) represents the probability of each byte value occurring in the file.

The entropy value ranges from:

0 → 8 bits per byte

A value closer to 8 generally indicates highly random data.

Encrypted files commonly exhibit high entropy, which makes entropy analysis useful as one indicator of ransomware-related encryption behavior.

Important: High entropy alone does not prove that a file is ransomware-encrypted. Compressed files, encrypted legitimate files, binaries, and other normal data can also have high entropy. Therefore, this project treats entropy as a detection signal rather than definitive proof of ransomware.

📈 Risk Classification

The system assigns a risk level to analyzed files based on their entropy and analysis results.

Example classification:

                File Analysis
                     │
                     ▼
              Calculate Entropy
                     │
                     ▼
              Compare Threshold
                     │
          ┌──────────┼──────────┐
          │          │          │
          ▼          ▼          ▼
        SAFE       MEDIUM      HIGH
          │          │          │
          │          │          ▼
          │          │       Generate
          │          │        Alert
          │          │
          └──────────┴──────────► Dashboard

The project uses a configurable high-entropy threshold for identifying potentially suspicious files.

🧰 Technology Stack
Backend
Python
File-system monitoring
Shannon entropy analysis
Process monitoring
JSON-based analysis results
Frontend
React
JavaScript
CSS
Recharts
Axios
React Router
Framer Motion
Socket.IO
Development Tools
Git
GitHub
Node.js
npm
PowerShell
📂 Project Structure
ransomware-early-detection-system-python-cybersecurity/
│
├── backend/
│   │
│   ├── __init__.py
│   ├── alert.py
│   ├── entropy_aggregator.py
│   ├── entropy_mointer.py
│   ├── entropy_utils.py
│   ├── folder_watcher.py
│   ├── main.py
│   ├── process_mointer.py
│   ├── watchdog_runner.py
│   ├── requirements.txt
│   │
│   ├── README.md.txt
│   │
│   └── test_files/
│       ├── testfile_0.txt
│       ├── testfile_1.txt
│       ├── testfile_2.txt
│       ├── ...
│       └── testfile_21.txt
│
├── frontend/
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── App.js
│       ├── AppContainer.js
│       ├── Footer.js
│       ├── ResultsPage.js
│       ├── index.js
│       ├── index.css
│       │
│       ├── pages/
│       │   └── Home.jsx
│       │
│       └── components/
│           ├── AboutSection.jsx
│           ├── AlertTable.js
│           ├── CoursesSection.jsx
│           ├── EntropyChart.js
│           ├── Footer.jsx
│           ├── HeroSection.jsx
│           └── Navbar.jsx
│
├── package.json
├── package-lock.json
└── .gitignore
⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/nitiketkarmore18/ransomware-early-detection-system-python-cybersecurity.git

Navigate into the project:

cd ransomware-early-detection-system-python-cybersecurity
🐍 Backend Setup

Navigate to the backend directory:

cd backend

Create a Python virtual environment:

Windows
python -m venv venv

Activate it:

venv\Scripts\activate

Install the required dependencies:

pip install -r requirements.txt
▶️ Running the Backend

From the backend directory:

python main.py

If the project is intended to be started through the watchdog runner:

python watchdog_runner.py

The appropriate entry point depends on the monitoring workflow being tested.

⚛️ Frontend Setup

Open a new terminal and navigate to the frontend:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm start

The dashboard will normally be available at:

http://localhost:3000
🔬 Testing the Detection System

The repository contains sample files under:

backend/test_files/

These files can be used to test the entropy-analysis functionality.

The system analyzes the file contents and calculates their entropy values.

Example result structure:

{
    "name": "testfile_0.txt",
    "entropy": 3.5263039714678293,
    "size": 31,
    "level": "safe"
}

The result contains:

name → analyzed file name
entropy → calculated Shannon entropy
size → file size
level → classification assigned by the system
📊 Dashboard

The frontend dashboard provides visual representations of the detection system.

Major dashboard components include:

Entropy Chart

Displays entropy-related information for analyzed files.

Alert Table

Provides a structured view of detected alerts.

Results Page

Displays analysis results generated by the backend.

Home Dashboard

Provides the main interface for interacting with the ransomware early-warning system.

🔐 Security Considerations

This project is designed as a defensive cybersecurity research and monitoring system.

It focuses on identifying behavioral indicators associated with ransomware activity.

The system should be used in controlled environments for:

Cybersecurity research
Educational demonstrations
Security monitoring experiments
File-system behavior analysis
Ransomware detection research

The system should not be treated as a complete enterprise-grade ransomware protection solution.

Entropy-based detection can produce both:

False positives
False negatives

Therefore, production-grade ransomware detection should combine multiple signals such as:

File modification frequency
File extension changes
Process behavior
Entropy changes
Process lineage
User activity
Network behavior
Endpoint security telemetry
🧪 Example Detection Workflow
1. Monitor a target directory
           ↓
2. Detect file activity
           ↓
3. Read file contents
           ↓
4. Calculate Shannon entropy
           ↓
5. Compare entropy against detection criteria
           ↓
6. Classify file activity
           ↓
7. Monitor related process activity
           ↓
8. Generate security alert
           ↓
9. Display results on dashboard
📌 Current Project Scope

The current implementation focuses on:

File entropy analysis
File-system monitoring
Process monitoring
Entropy aggregation
Security alert generation
React-based visualization
Sample test-file analysis

The project is intended as a foundation that can be extended with additional ransomware detection techniques.

🔮 Future Enhancements

Potential future improvements include:

Machine-learning-based ransomware classification
Real-time WebSocket alert streaming
Advanced process behavior analysis
File extension change detection
File modification-rate analysis
Process-to-file activity correlation
Automated incident response
Windows Event Log integration
Threat intelligence integration
Database-backed event storage
User authentication and role-based access
Email and notification alerts
SIEM integration
Advanced security analytics
Docker-based deployment
Cloud deployment
📚 Learning Outcomes

This project demonstrates practical experience with:

Python cybersecurity development
Ransomware detection concepts
Shannon entropy
File-system monitoring
Process monitoring
Event-driven programming
Backend development
React frontend development
REST/API integration
Data visualization
Git and GitHub
Full-stack application development
Cybersecurity monitoring architecture
👨‍💻 Author

Nitiket Karmore

B.Tech – Computer Science Engineering (Cybersecurity)

Nagpur, Maharashtra, India

GitHub

https://github.com/nitiketkarmore18

Project Repository

https://github.com/nitiketkarmore18/ransomware-early-detection-system-python-cybersecurity

⭐ Project

If you find this project useful for learning about cybersecurity, ransomware detection, Python development, or security monitoring, consider giving the repository a ⭐ on GitHub.

⚠️ Disclaimer

This project is developed for educational, research, and defensive cybersecurity purposes only.

It is intended to help understand ransomware detection techniques and security monitoring concepts.

It should not be considered a replacement for professional endpoint detection and response (EDR), antivirus, backup, or enterprise security solutions.
