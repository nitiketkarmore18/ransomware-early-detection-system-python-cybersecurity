import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./index.css";

function ResultsPage() {
  const [analysisData, setAnalysisData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/results")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setAnalysisData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: 20 }}>Loading...</p>;
  }

  if (!analysisData || analysisData.length === 0) {
    return <p style={{ textAlign: "center", marginTop: 20 }}>No analysis data available.</p>;
  }

  const chartData = analysisData.map((item) => ({
    name: item.name,
    entropy: parseFloat(item.entropy.toFixed(4)),
  }));

  const totalEntropy = analysisData.reduce((sum, x) => sum + x.entropy, 0);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="App">
      <header className="header">
        <h1 className="gradient-text">Entropy Analysis Results</h1>
        <h2 className="subheading">⚡ Let’s Detect Ransomware!! ⚡</h2>
      </header>

      <table>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Entropy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {analysisData.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.entropy.toFixed(4)}</td>
              <td
                style={{
                  color:
                    item.level === "danger"
                      ? "red"
                      : item.level === "suspicious"
                      ? "orange"
                      : "limegreen",
                }}
              >
                {capitalize(item.level)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 style={{ marginTop: 20 }}>Total Entropy: {totalEntropy.toFixed(4)}</h4>

      <h3 style={{ marginTop: 40, textAlign: "center", color: "#41a4ff" }}>
        Entropy Chart
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="entropy" stroke="#00ffff" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" interval={0} angle={-35} textAnchor="end" height={70} />
          <YAxis domain={[0, 8]} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      <footer>
        © 2025 Ransomware Detection App. All rights reserved.
      </footer>
    </div>
  );
}

export default ResultsPage;
