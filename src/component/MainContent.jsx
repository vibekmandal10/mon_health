import React from "react";
import "./MainContent.css";
import { Navbar } from "react-bootstrap";
const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <header>
          <h2>Health Check Application</h2>
        </header>
        <hr />

        <main>
          <div className="release_version">
            <table>
              <tr>
                <th colSpan={2}>
                  <h2>Release Information</h2>
                </th>
              </tr>
              <tr>
                <th>Version</th>
                <td id="release-version">R24.09</td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td id="release-date">01/12/2024</td>
              </tr>
            </table>
          </div>
          <div className="cards">
            <div className="card">
              <table>
                <tr>
                  <td colSpan={2}>
                    <h2>Catalog</h2>
                  </td>
                </tr>

                <tr>
                  <td>Hostname</td>
                  <td>prdmon01</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>127.0.0.1</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>100G</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <table>
                <tr>
                  <td colSpan={2}>
                    <h2>Foundation</h2>
                  </td>
                </tr>

                <tr>
                  <td>Hostname</td>
                  <td>prdmon02</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>127.0.0.1</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>100G</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <table>
                <tr>
                  <td colSpan={2}>
                    <h2>AI</h2>
                  </td>
                </tr>

                <tr>
                  <td>Hostname</td>
                  <td>prdmon03</td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>127.0.0.1</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>100G</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Mem</td>
                  <td>16G</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="url_health">
            <table>
              <thead>
                <tr class="header">
                  <th>Service</th>
                  <th>Status</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody id="url-status-list">
                <tr>
                  <td>Alerta</td>
                  <td>UP</td>
                  <td>
                    <a href="https://172.24.247.53:8080" target="_blank">
                      https://172.24.247.53:8080
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Grafana</td>
                  <td>UP</td>
                  <td>
                    <a href="https://172.24.247.53:3001" target="_blank">
                      https://172.24.247.53:3001
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>AWX</td>
                  <td>DOWN</td>
                  <td>
                    <a href="https://172.24.247.53:30001" target="_blank">
                      https://172.24.247.53:30001
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Alerta_MOM</td>
                  <td>UP</td>
                  <td>
                    <a href="https://172.24.247.54:8089" target="_blank">
                      https://172.24.247.54:8089
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainContent;
