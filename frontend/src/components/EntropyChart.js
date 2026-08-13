import React from "react";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const EntropyChart = ({ data }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-4">📈 Real-Time Entropy Monitor</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickFormatter={t => new Date(t * 1000).toLocaleTimeString()} />
        <YAxis domain={[0, 8]} />
        <Tooltip />
        <Line type="monotone" dataKey="entropy" stroke="#3b82f6" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default EntropyChart;
