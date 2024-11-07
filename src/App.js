import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [scriptOutput, setScriptOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runScript = async () => {
    setLoading(true);
    setError("");
    setScriptOutput("");
    try {
      const response = await axios.get(
        "http://54.167.169.125:5000/api/run-script"
      );
      setScriptOutput(response.data.output);
    } catch (err) {
      console.error(err);
      setError("Error executing the script");
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Health Check coded by vibek</h1>
      <button onClick={runScript} disabled={loading}>
        {loading ? "Running..." : "Check Health"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {scriptOutput && (
        <pre>
          <code>{scriptOutput}</code>
        </pre>
      )}
    </div>
  );
}

export default App;
