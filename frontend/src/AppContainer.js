import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultsPage from "./ResultsPage";
import Footer from "./Footer";

function AppContainer() {
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/results");
        setAnalysisData(res.data);
      } catch (error) {
        setAnalysisData([]); // fallback in case of error
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ResultsPage analysisData={analysisData} />
      <Footer />
    </div>
  );
}

export default AppContainer;
