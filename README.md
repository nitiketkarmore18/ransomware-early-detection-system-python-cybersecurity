# 🛡️ Ransomware Early Warning Detection System

A Python-based cybersecurity system designed to detect potential ransomware activity at an early stage by monitoring file-system behavior, analyzing file entropy, and tracking suspicious processes.

The system continuously monitors file activity, calculates Shannon entropy values, identifies abnormal changes in file characteristics, and provides security alerts through a React-based cybersecurity dashboard.

---

## 📌 Project Overview

### Description

Ransomware attacks can rapidly encrypt large numbers of files, making early detection extremely important.

This project implements an early-warning mechanism that combines:

- File-system monitoring
- Shannon entropy analysis
- Process monitoring
- Suspicious activity detection
- Automated alert generation
- Dashboard visualization

The backend performs security monitoring and analysis, while the frontend provides a web-based interface for viewing entropy results and security alerts.

### System Components

- Python-based cybersecurity backend
- React-based monitoring dashboard
- File-system monitoring
- Process monitoring
- Entropy analysis
- Alert generation
- JSON-based result processing

---

## 🎯 Objectives

### Detection

- Detect suspicious file activity at an early stage
- Identify files exhibiting unusually high entropy
- Detect abnormal file modifications
- Identify potentially suspicious processes

### Monitoring

- Monitor file-system activity
- Monitor running processes
- Analyze monitored files
- Track suspicious activity

### Visualization

- Display entropy analysis results
- Display security alerts
- Provide a centralized monitoring dashboard
- Make security analysis easier to understand

---

## ✨ Key Features

### Ransomware Detection

- Shannon entropy-based file analysis
- Entropy-based file classification
- Suspicious file activity detection
- Early-warning detection mechanism

### File-System Monitoring

- Continuous file monitoring
- Detection of newly created files
- Detection of modified files
- Automatic file analysis

### Process Monitoring

- Monitoring of active processes
- Detection of potentially suspicious processes
- Process activity analysis

### Alert System

- Automated security alerts
- Suspicious activity classification
- Entropy-based alert information
- Security monitoring results

### Dashboard

- React-based cybersecurity dashboard
- Entropy visualization
- Alert table
- Results page
- Monitoring interface
- Responsive user interface

---

## 🛠️ Technology Stack

### Backend

- Python
- Shannon Entropy Analysis
- File-System Monitoring
- Process Monitoring
- JSON-based Result Processing

### Frontend

- React
- JavaScript
- CSS
- Recharts

### Libraries

- Watchdog
- Axios
- Socket.IO
- Recharts
- React Router
- Framer Motion

### Development Tools

- Git
- GitHub
- Visual Studio Code
- PowerShell
- npm

---

## 🧠 Detection Methodology

### Shannon Entropy

Shannon entropy is used to measure the randomness of file contents.

Ransomware-encrypted files generally exhibit higher entropy because encrypted data appears more random than normal text or structured files.

The system uses entropy as one of the indicators for identifying potentially suspicious file behavior.

### Entropy Analysis

The system:

- Reads monitored file contents
- Calculates Shannon entropy
- Evaluates the entropy value
- Classifies the file
- Stores the analysis result
- Uses the result for suspicious activity detection

### File Classification

Analyzed files contain information such as:

- File name
- Entropy value
- File size
- Classification level

Example:

- `testfile_0.txt` — Entropy: `3.52` — Safe
- `testfile_1.txt` — Entropy: `6.49` — Safe
- `testfile_10.txt` — Entropy: `6.49` — Safe

---

## 🔄 System Workflow

### Detection Workflow

~~~
File Activity
      ↓
File-System Monitoring
      ↓
Entropy Calculation
      ↓
Entropy Classification
      ↓
Suspicious Activity Detection
      ↓
Alert Generation
      ↓
Dashboard Visualization
~~~

### Backend Workflow

~~~
Monitored Files
      ↓
folder_watcher.py
      ↓
entropy_mointer.py
      ↓
entropy_utils.py
      ↓
Entropy Analysis
      ↓
entropy_aggregator.py
      ↓
JSON Results
      ↓
Alert Processing
~~~

### Frontend Workflow

~~~
Backend Results
      ↓
API / Socket Communication
      ↓
React Application
      ↓
Dashboard Components
      ↓
Charts + Alerts + Results
~~~

---

## 📂 Project Structure

### Root Directory

~~~
Ransomware_Early_Warning System/
│
├── backend/
├── frontend/
├── package.json
├── package-lock.json
└── .gitignore
~~~

### Backend

~~~
backend/
│
├── README.md.txt
├── __init__.py
├── alert.py
├── entropy_aggregator.py
├── entropy_mointer.py
├── entropy_utils.py
├── folder_watcher.py
├── main.py
├── process_mointer.py
├── requirements.txt
├── watchdog_runner.py
└── test_files/
    ├── testfile_0.txt
    ├── testfile_1.txt
    ├── testfile_2.txt
    ├── testfile_3.txt
    ├── testfile_4.txt
    ├── testfile_5.txt
    ├── testfile_6.txt
    ├── testfile_7.txt
    ├── testfile_8.txt
    ├── testfile_9.txt
    ├── testfile_10.txt
    ├── testfile_11.txt
    ├── testfile_12.txt
    ├── testfile_13.txt
    ├── testfile_14.txt
    ├── testfile_15.txt
    ├── testfile_16.txt
    ├── testfile_17.txt
    ├── testfile_18.txt
    ├── testfile_19.txt
    ├── testfile_20.txt
    └── testfile_21.txt
~~~

### Frontend

~~~
frontend/
│
├── package.json
├── package-lock.json
├── public/
│   └── index.html
├── server.js
└── src/
    ├── App.js
    ├── AppContainer.js
    ├── Footer.js
    ├── ResultsPage.js
    ├── index.css
    ├── index.js
    │
    ├── components/
    │   ├── AboutSection.jsx
    │   ├── AlertTable.js
    │   ├── CoursesSection.jsx
    │   ├── EntropyChart.js
    │   ├── Footer.jsx
    │   ├── HeroSection.jsx
    │   └── Navbar.jsx
    │
    └── pages/
        └── Home.jsx
~~~

---

## ⚙️ Backend Components

### Entropy Analysis

`entropy_utils.py` contains the functionality used for calculating and processing file entropy.

### Entropy Monitoring

`entropy_mointer.py` handles entropy monitoring and analysis of monitored files.

### Entropy Aggregation

`entropy_aggregator.py` processes and aggregates entropy analysis results.

### File-System Monitoring

`folder_watcher.py` monitors file-system activity and detects file changes that require analysis.

### Process Monitoring

`process_mointer.py` monitors active system processes and supports the ransomware detection workflow.

### Alert Processing

`alert.py` handles security-related alert processing based on suspicious activity.

### Application Entry Point

`main.py` acts as one of the primary backend entry points for running the monitoring functionality.

### Watchdog Runner

`watchdog_runner.py` supports the execution of the file-system monitoring workflow.

### Test Files

The `test_files/` directory contains sample files used for testing entropy analysis and file-system monitoring functionality.

---

## 🖥️ Frontend Components

### Main Application

`App.js` initializes the React application.

### Application Container

`AppContainer.js` manages the primary application structure and dashboard flow.

### Home Page

`Home.jsx` provides the main dashboard interface.

### Results Page

`ResultsPage.js` provides the interface for displaying analysis results.

### Entropy Chart

`EntropyChart.js` visualizes entropy analysis data using the frontend charting functionality.

### Alert Table

`AlertTable.js` displays security alerts and suspicious activity information.

### Navigation

`Navbar.jsx` provides navigation functionality for the dashboard.

### Hero Section

`HeroSection.jsx` provides the main introductory section of the dashboard.

### About Section

`AboutSection.jsx` provides information about the project and its purpose.

### Courses Section

`CoursesSection.jsx` provides the relevant dashboard content included in the frontend.

### Footer

`Footer.js` and `Footer.jsx` provide footer content for the application.

---

## 📊 Entropy Results

### Result Data

The system processes entropy results containing information such as:

~~~json
{
    "name": "testfile_0.txt",
    "entropy": 3.5263039714678293,
    "size": 31,
    "level": "safe"
}
~~~

### Result Fields

- `name` — Name of the analyzed file
- `entropy` — Calculated Shannon entropy
- `size` — File size
- `level` — Classification level

### Generated Results

Entropy analysis results are generated during system execution.

Runtime-generated result data is excluded from Git tracking when appropriate so that generated monitoring data does not unnecessarily become part of the source repository.

---

## 🚀 Installation

### Prerequisites

Before running the project, install:

- Python
- Node.js
- npm
- Git

### Clone Repository

~~~bash
git clone https://github.com/nitiketkarmore18/ransomware-early-detection-system-python-cybersecurity.git
~~~

### Navigate to Project

~~~bash
cd ransomware-early-detection-system-python-cybersecurity
~~~

---

## 🐍 Backend Setup

### Navigate to Backend

~~~bash
cd backend
~~~

### Create Virtual Environment

~~~bash
python -m venv venv
~~~

### Activate Virtual Environment

#### Windows PowerShell

~~~powershell
.\venv\Scripts\Activate.ps1
~~~

### Install Dependencies

~~~bash
pip install -r requirements.txt
~~~

### Run Backend

Depending on the required workflow, run the appropriate backend entry point:

~~~bash
python main.py
~~~

or:

~~~bash
python watchdog_runner.py
~~~

---

## ⚛️ Frontend Setup

### Navigate to Frontend

From the project root:

~~~bash
cd frontend
~~~

### Install Dependencies

~~~bash
npm install
~~~

### Start Development Server

~~~bash
npm start
~~~

The React development server will normally run on:

~~~text
http://localhost:3000
~~~

---

## 🔗 Backend and Frontend Communication

### Communication

The frontend and backend are structured to work together as part of the monitoring and visualization workflow.

The project includes communication technologies such as:

- Axios
- Socket.IO
- REST-style backend communication
- React-based visualization

### Backend Results

Backend monitoring and analysis results can be processed and presented by the frontend dashboard for visualization and security monitoring.

---

## 🧪 Testing

### Test Files

The backend contains multiple test files inside:

~~~
backend/test_files/
~~~

These files can be used to test entropy analysis and file-system monitoring functionality.

### Entropy Testing

The system analyzes test files and generates entropy values that can be used to verify the classification workflow.

### Dashboard Testing

The React dashboard can be tested by running:

~~~bash
npm start
~~~

and accessing the local development server.

---

## 📈 Dashboard

### Dashboard Capabilities

The dashboard provides a centralized interface for viewing:

- Entropy analysis
- File classifications
- Security alerts
- Monitoring information
- Analysis results

### Visualization

The project uses chart-based visualization to represent entropy-related information and provide a more understandable representation of the analysis results.

---

## 🔐 Security Considerations

### Early-Warning Approach

This project is intended as an early-warning and behavioral monitoring system rather than a complete enterprise ransomware prevention solution.

### Entropy Limitations

High entropy alone does not prove that a file is encrypted by ransomware.

Legitimate files such as:

- Compressed files
- Encrypted files
- Images
- Videos
- Archives

may also naturally have high entropy.

Therefore, entropy analysis should be combined with additional behavioral indicators.

### Process Monitoring

Process monitoring provides an additional signal that can help identify potentially suspicious system activity.

Combining multiple indicators can improve the reliability of ransomware detection.

---

## 📌 Current Implementation

### Implemented

- File-system monitoring
- Shannon entropy calculation
- Entropy classification
- Process monitoring
- Alert processing
- JSON result processing
- React dashboard
- Entropy visualization
- Alert table
- Test files
- Backend and frontend integration structure

### Project Status

The project is currently implemented as a cybersecurity research and demonstration system focused on ransomware early-warning detection.

---

## 🔮 Future Improvements

### Detection Improvements

- Machine-learning-based ransomware classification
- Behavioral anomaly detection
- Improved entropy-based detection
- File extension behavior analysis
- File encryption pattern detection
- Multi-factor ransomware scoring

### Monitoring Improvements

- Real-time event streaming
- Advanced process behavior analysis
- Windows Event Log integration
- System-level monitoring
- Improved suspicious process detection

### Dashboard Improvements

- Real-time alert notifications
- Historical attack analysis
- Advanced filtering
- Security event timeline
- Risk scoring dashboard
- Interactive threat investigation

### Deployment Improvements

- Docker support
- Cloud deployment
- Centralized monitoring
- Database integration
- Authentication and authorization
- Production-grade logging

---

## 📚 Learning Outcomes

### Cybersecurity

- Understanding ransomware behavior
- File-system monitoring
- Process monitoring
- Entropy-based analysis
- Security alert generation

### Python

- File handling
- Entropy calculation
- Process management
- Event monitoring
- JSON processing

### Web Development

- React application development
- Dashboard development
- Data visualization
- API communication
- Frontend-backend integration

### Software Development

- Git version control
- Project organization
- Backend/frontend architecture
- Debugging
- Testing
- Application deployment concepts

---

## 👨‍💻 Author

### Nitiket Karmore

B.Tech Computer Science Engineering — Cybersecurity

### GitHub

https://github.com/nitiketkarmore18

### Project Repository

https://github.com/nitiketkarmore18/ransomware-early-detection-system-python-cybersecurity

---

## 📄 License

### Project Usage

This project is intended for educational, research, and cybersecurity demonstration purposes.

Please use the system responsibly and only on systems and files for which you have authorization.

---

## ⭐ Acknowledgements

### Technologies

This project was developed using open-source technologies and libraries including:

- Python
- React
- Recharts
- Watchdog
- Axios
- Socket.IO
- Node.js
- Git
- GitHub

### Purpose

The project was developed to explore practical cybersecurity techniques for identifying ransomware-like behavior through file-system monitoring, entropy analysis, process monitoring, and security visualization.
