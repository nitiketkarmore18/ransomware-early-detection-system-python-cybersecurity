// src/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: 20,
      backgroundColor: "#23263a",
      color: "#aaa",
      marginTop: 40,
      fontSize: 14,
    }}>
      &copy; {new Date().getFullYear()} Ransomware Detection App. All rights reserved.
    </footer>
  );
}
