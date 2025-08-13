"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function BarChartCard({ data }: { data: { label: string; Individual: number; "Non-Individual": number }[] }) {
  return (
    <div className="card card-tight">
      <div className="mb-3 font-medium">KYC by Type (Today vs Yesterday)</div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Individual" />
            <Bar dataKey="Non-Individual" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
