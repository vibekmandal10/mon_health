import React, { useState } from "react";
import "./Redis_data.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Redis_data = () => {
  const [result, setResult] = useState("Redis Data will be populated here");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [metric_id_string, setMetric_id_string] = useState("");

  const runScript = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!metric_id_string.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }
    setError("");
    //setResult("");

    try {
      const data = { metric_id_string };
      const response = await axios.post(
        "http://ilgss0396:9898/api/redis-data",
        data
      );
      //    const parsedData = JSON.parse(response.data.output)
      setResult(JSON.parse(response.data.output));
    } catch (err) {
      console.error(err);

      setError("something went wrong😔, Please use valid metric_id_string");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(result, undefined, 4))
      .then(() => {
        toast.success("Copied");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div className="main_redis">
      {/* <h2>Check metric_id_string in redis</h2> */}
      <div className="redis_data_container">
        <form className="redis_data_form">
          <h4>Metric Id String: </h4>
          <input
            type="text"
            value={metric_id_string}
            onChange={(e) => {
              setMetric_id_string(e.target.value);
            }}
            required
          />
          <button onClick={runScript}>
            {loading ? "Fetching..." : "Fetch"}
          </button>
        </form>
        <div className="redis_result">
          <button className="redis_result_copy_btn" onClick={handleCopy}>
            Copy
          </button>

          <button
            className="redis_result_clear_btn"
            onClick={() => {
              setResult("Click on Fetch for output !!");
            }}
          >
            Clear
          </button>

          <div className="content">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <pre>
              <code>{!error && JSON.stringify(result, undefined, 4)}</code>
            </pre>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Redis_data;
