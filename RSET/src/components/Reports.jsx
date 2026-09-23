import { FaFileAlt, FaDownload } from "react-icons/fa";
import "./Reports.css";

const reports = [
  {
    title: "Annual Report 2025'26",
    file: "/reports/annual-report-2025-26.pdf",
  },
  {
    title: "Annual Report 2024'25",
    file: "/reports/annual-report-2024-25.pdf",
  },
  {
    title: "Annual Report 2023'24",
    file: "/reports/annual-report-2023-24.pdf",
  },
  {
    title: "Annual Report 2022'23",
    file: "/reports/annual-report-2022-23.pdf",
  },
  {
    title: "Annual Report 2021'22",
    file: "/reports/annual-report-2021-22.pdf",
  },
];

export default function Reports() {
  return (
    <section className="reports-page">
      <div className="reports-header">
        <span className="reports-label">DOCUMENTATION</span>
        <h1>Annual Reports</h1>
        <div className="reports-line"></div>
        <p>
          Explore the annual reports documenting the initiatives, achievements, and impact of IEDC RSET.
        </p>
      </div>

      <div className="reports-container">
        <div className="reports-table-wrapper">
          <table className="reports-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>TYPE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.title}>
                  <td className="report-name-col">
                    <div className="report-icon-box">
                      <FaFileAlt />
                    </div>
                    <span className="report-title-text">{report.title}</span>
                  </td>
                  <td className="report-type-col">PDF</td>
                  <td className="report-action-col">
                    <a href={report.file} download className="download-btn">
                      <FaDownload /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}