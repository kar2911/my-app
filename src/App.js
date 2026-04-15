import React from "react";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <h1>🚀 CI/CD SUCCESS</h1>
      <h2>Deployed using GitHub Actions + EC2</h2>

      <div style={styles.box}>
        <p>🔥 This change came from GitHub push</p>
        <p>⏱ Time: {new Date().toLocaleString()}</p>
      </div>

      <button style={styles.button} onClick={() => alert("Pipeline Working ✅")}>
        Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  box: {
    margin: "20px auto",
    padding: "20px",
    width: "320px",
    border: "2px solid black",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;