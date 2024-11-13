import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Logs.css";
import download_icon from "../images/download_icon2.png";
const Logs = () => {
  const [containerName, setContainerName] = useState("");
  const [isActive, setIsActive] = useState("");
  const [scriptOutput, setScriptOutput] = useState(
    "container logs will be printed here !!"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadableContent, setDownloadableContent] = useState("");
  const [time, setTime] = useState(5);

  // const runScript = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setScriptOutput("");
  //   try {
  //     const response = await axios.get("http://ilgss0396:9898/api/run-script");
  //     setScriptOutput(response.data.output);
  //     setDownloadableContent(response.data.output);
  //   } catch (err) {
  //     console.error(err);
  //     setError("Error executing the script");
  //   }
  //   setLoading(false);
  // };

  const runScript = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setScriptOutput("");
    try {
      // const response = await axios.get(
      //   "http://44.207.5.113:5001/api/run-script"
      // );
      const data = { time, containerName };
      const response = await axios.post(
        "http://ilgss0396:9898/api/run-script",
        data
      );

      setScriptOutput(response.data.output);
      setDownloadableContent(response.data.output);
    } catch (err) {
      console.error(err);
      setError("Something Went Wrong 😔");
    }
    setLoading(false);
  };

  const handleDownload = (event) => {
    event.preventDefault();
    // Create a blob with the content and set the type to plain text
    const blob = new Blob([downloadableContent], { type: "text/plain" });

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${isActive}_log.txt`; // Filename for the download

    // Append anchor to body, click it to trigger download, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const highlightError = (text) => {
    // Split the text on the word "error" (case-insensitive)
    const parts = text.split(/(error)/gi);

    return parts.map((part, index) => {
      // Check if the part is the word "error"
      if (part.toLowerCase() === "error") {
        // Wrap the "error" word in a span with red color
        return (
          <span key={index} style={{ color: "red" }}>
            {part}
          </span>
        );
      } else {
        // Return the rest of the text as normal
        return part;
      }
    });
  };

  return (
    <div className="main-logs">
      {/* <h2>You can find container logs from here</h2> */}

      <div className="container-terminal">
        <div className="container-list">
          <h2>Components</h2>
          <hr />
          <ul>
            <li
              onClick={() => {
                setContainerName("mon_default_alerta");
                setIsActive("mon_default_alerta");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_alerta" ? "blueviolet" : "",
              }}
            >
              Alerta
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_alerta_db");
                setIsActive("mon_default_alerta_db");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_alerta_db" ? "blueviolet" : "",
              }}
            >
              Alerta DB
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_alerta_archive_db");
                setIsActive("mon_default_alerta_archive_db");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_alerta_archive_db"
                    ? "blueviolet"
                    : "",
              }}
            >
              Alerta Archive DB
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_metadata_db");
                setIsActive("mon_default_metadata_db");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_metadata_db" ? "blueviolet" : "",
              }}
            >
              Metadata DB
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_alerta_gateway");
                setIsActive("mon_default_alerta_gateway");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_alerta_gateway" ? "blueviolet" : "",
              }}
            >
              Alerta Gateway
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_metric_gateway");
                setIsActive("mon_default_metric_gateway");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_metric_gateway" ? "blueviolet" : "",
              }}
            >
              Metric Gateway
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_metadata_gateway");
                setIsActive("mon_default_metadata_gateway");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_metadata_gateway"
                    ? "blueviolet"
                    : "",
              }}
            >
              Metadata Gateway
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_influxdb_lt");
                setIsActive("mon_default_influxdb_lt");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_influxdb_lt" ? "blueviolet" : "",
              }}
            >
              InfluxDB LT
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_influxdb_mt");
                setIsActive("mon_default_influxdb_mt");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_influxdb_mt" ? "blueviolet" : "",
              }}
            >
              InfluxDB MT
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_influxdb_st");
                setIsActive("mon_default_influxdb_st");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_influxdb_st" ? "blueviolet" : "",
              }}
            >
              InfluxDB ST
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_kapacitor_m2a_0");
                setIsActive("mon_default_kapacitor_m2a_0");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_kapacitor_m2a_0"
                    ? "blueviolet"
                    : "",
              }}
            >
              Kapacitor M2A
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_kapacitor");
                setIsActive("mon_default_kapacitor");
              }}
              style={{
                backgroundColor:
                  isActive === "mon_default_kapacitor" ? "blueviolet" : "",
              }}
            >
              Kapacitor
            </li>

            <li
              onClick={() => {
                setContainerName("mon_default_redis_md");
                setIsActive("mon_default_redis_md");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_redis_md" ? "blueviolet" : "",
              }}
            >
              Redis Md
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_redis_alerta");
                setIsActive("mon_default_redis_alerta");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_redis_alerta" ? "blueviolet" : "",
              }}
            >
              Redis Alerta
            </li>

            <li
              onClick={() => {
                setContainerName("mon_default_grafana_7_3001");
                setIsActive("mon_default_grafana_7_3001");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_grafana_7_3001" ? "blueviolet" : "",
              }}
            >
              Grafana
            </li>

            <li
              onClick={() => {
                setContainerName("mon_default_graphql");
                setIsActive("mon_default_graphql");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_graphql" ? "blueviolet" : "",
              }}
            >
              Graphql
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_telegraf_hb");
                setIsActive("mon_default_telegraf_hb");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_telegraf_hb" ? "blueviolet" : "",
              }}
            >
              Telegraf HB
            </li>
            <li
              onClick={() => {
                setContainerName("mon_default_gitbucket");
                setIsActive("mon_default_gitbucket");
              }}
              style={{
                backgroundColor:
                  isActive == "mon_default_gitbucket" ? "blueviolet" : "",
              }}
            >
              Git Bucket
            </li>
          </ul>
        </div>
        <div className="log-terminal">
          <div className="log-terminal-header">
            <h2>Log For Container: {containerName} </h2>
            <form action="">
              {/* <label htmlFor="">Since </label> */}
              <input
                type="Number"
                name=""
                id=""
                placeholder="Since in min"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
              <button onClick={runScript}>
                {loading ? "Fetching..." : "Fetch"}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setScriptOutput("");
                }}
              >
                Clear
              </button>
              {/* <button onClick={handleDownload}>
                <img className="download_icon" src={download_icon} alt="" />
              </button> */}
              <img
                onClick={handleDownload}
                className="download_icon"
                src={download_icon}
                alt=""
              />
            </form>
          </div>

          <hr />
          <div className="print-log">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {scriptOutput && (
              <pre>
                <code>{highlightError(scriptOutput)}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
