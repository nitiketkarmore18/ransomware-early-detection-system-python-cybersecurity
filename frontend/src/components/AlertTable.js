import React from "react";

const AlertTable = ({ alerts }) => (
  <div className="mt-10 max-w-5xl mx-auto">
    <h2 className="text-xl font-semibold mb-4">⚠️ Detected Suspicious Processes</h2>
    <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left py-2 px-4 border-b border-gray-300">Process</th>
          <th className="text-left py-2 px-4 border-b border-gray-300">PID</th>
          <th className="text-left py-2 px-4 border-b border-gray-300">Write Speed (KB/s)</th>
          <th className="text-left py-2 px-4 border-b border-gray-300">Open Files</th>
          <th className="text-left py-2 px-4 border-b border-gray-300">Entropy</th>
          <th className="text-left py-2 px-4 border-b border-gray-300">File</th>
        </tr>
      </thead>
      <tbody>
        {alerts.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center py-4 text-gray-500">No alerts yet.</td>
          </tr>
        ) : (
          alerts.map((alert) => (
            <tr
              key={alert.pid}
              className="even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="py-2 px-4 border-b border-gray-300">{alert.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{alert.pid}</td>
              <td className="py-2 px-4 border-b border-gray-300">{alert.write_speed}</td>
              <td className="py-2 px-4 border-b border-gray-300">{alert.open_files}</td>
              <td className="py-2 px-4 border-b border-gray-300">{alert.entropy?.toFixed(2)}</td>
              <td className="py-2 px-4 border-b border-gray-300">{alert.file}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default AlertTable;
