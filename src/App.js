import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🚀 Karthik </h1>
      <h2>Deployed using GitHub Actions + EC2</h2>

      <div className="box">
        <p>🔥 This change came from GitHub push</p>
        <p>⏱ Time: {new Date().toLocaleString()}</p>
      </div>

      <button onClick={() => alert("Pipeline Working ✅")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
