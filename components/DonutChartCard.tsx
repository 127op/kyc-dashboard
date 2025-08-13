"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

type Entry = { name: string; value: number };

export default function DonutChartCard({ data }: { data: Entry[] }) {
  return (
    <div className="card card-tight">
      <div className="mb-3 font-medium">Solicited & Unsolicited (PANs)</div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
            >
              {data.map((_, i) => <Cell key={i} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
