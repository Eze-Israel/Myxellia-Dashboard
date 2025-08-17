"use client";

import { useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type Range = "1w" | "1m" | "1y";

type ChartRow = {
  label: string;
  inflow: number;
  mrr: number;
  outflow: number;
};

const DATA: Record<Range, ChartRow[]> = {
  "1w": [
    { label: "Mon", inflow: 18_000_000, mrr: 6_000_000, outflow: 10_000_000 },
    { label: "Tue", inflow: 12_000_000, mrr: 4_000_000, outflow: 8_000_000 },
    { label: "Wed", inflow: 26_000_000, mrr: 9_000_000, outflow: 15_000_000 },
    { label: "Thu", inflow: 15_000_000, mrr: 5_000_000, outflow: 9_000_000 },
    { label: "Fri", inflow: 36_000_000, mrr: 12_000_000, outflow: 20_000_000 },
    { label: "Sat", inflow: 22_000_000, mrr: 7_000_000, outflow: 13_000_000 },
    { label: "Sun", inflow: 28_000_000, mrr: 9_500_000, outflow: 16_000_000 },
  ],
  "1m": [
    { label: "Wk 1", inflow: 65_000_000, mrr: 20_000_000, outflow: 42_000_000 },
    { label: "Wk 2", inflow: 72_000_000, mrr: 22_000_000, outflow: 40_000_000 },
    { label: "Wk 3", inflow: 80_000_000, mrr: 25_000_000, outflow: 48_000_000 },
    { label: "Wk 4", inflow: 68_000_000, mrr: 21_000_000, outflow: 44_000_000 },
  ],
  "1y": [
    { label: "Jan", inflow: 24_000_000, mrr: 8_000_000, outflow: 14_000_000 },
    { label: "Feb", inflow: 30_000_000, mrr: 10_000_000, outflow: 16_000_000 },
    { label: "Mar", inflow: 26_000_000, mrr: 9_000_000, outflow: 15_000_000 },
    { label: "Apr", inflow: 40_000_000, mrr: 13_000_000, outflow: 22_000_000 },
    { label: "May", inflow: 32_000_000, mrr: 11_000_000, outflow: 18_000_000 },
    { label: "Jun", inflow: 45_000_000, mrr: 15_000_000, outflow: 25_000_000 },
    { label: "Jul", inflow: 36_000_000, mrr: 12_000_000, outflow: 20_000_000 },
    { label: "Aug", inflow: 50_000_000, mrr: 17_000_000, outflow: 28_000_000 },
    { label: "Sep", inflow: 42_000_000, mrr: 14_000_000, outflow: 24_000_000 },
    { label: "Oct", inflow: 48_000_000, mrr: 16_000_000, outflow: 26_000_000 },
    { label: "Nov", inflow: 54_000_000, mrr: 18_000_000, outflow: 30_000_000 },
    { label: "Dec", inflow: 60_000_000, mrr: 20_000_000, outflow: 34_000_000 },
  ],
};

const NGN = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Tab({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-medium border transition
        ${active ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`}
      type="button"
    >
      {children}
    </button>
  );
}

function Stat({
  label,
  value,
  delta,
  positive = true,
}: {
  label: string;
  value: number;
  delta?: number; 
  positive?: boolean;
}) {
  const arrow = positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="text-2xl font-extrabold tracking-tight">
        {NGN.format(value)}
      </div>
      <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
        <span className="font-medium">{label}</span>
        {typeof delta === "number" && (
          <span
            className={`ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs border
            ${positive ? "text-green-700 border-green-200 bg-green-50" : "text-rose-700 border-rose-200 bg-rose-50"}`}
          >
            {arrow}
            {(delta * 100).toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function SalesOverview() {
  const [range, setRange] = useState<Range>("1y");

  const chartData = useMemo(() => DATA[range], [range]);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white ">
      {/* Header */}
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between px-[100px]">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Sales Overview</h2>
          <p className="text-sm text-gray-600">Showing overview Jan 2022 - Sep 2022</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <Tab active={range === "1w"} onClick={() => setRange("1w")}>1 Week</Tab>
            <Tab active={range === "1m"} onClick={() => setRange("1m")}>1 Month</Tab>
            <Tab active={range === "1y"} onClick={() => setRange("1y")}>1 Year</Tab>
          </div>
          <button
            type="button"
            className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold bg-white hover:bg-gray-50"
          >
            View Transactions
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Body */}
      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-3">
        {/* Chart */}
        <div className="xl:col-span-2">
          <div className="text-center md:hidden mb-4 flex items-center justify-center gap-2">
            {/* Mobile tabs */}
            <Tab active={range === "1w"} onClick={() => setRange("1w")}>1 Week</Tab>
            <Tab active={range === "1m"} onClick={() => setRange("1m")}>1 Month</Tab>
            <Tab active={range === "1y"} onClick={() => setRange("1y")}>1 Year</Tab>
          </div>

          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barCategoryGap={20}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis tickFormatter={(v) => `${Math.round(v / 1_000_000)}m`} />
                <Tooltip formatter={(v: number) => NGN.format(v)} />
                <Legend />
                {/* Colors intentionally set to mirror screenshot (blue / green / red) */}
                <Bar dataKey="inflow" name="Inflow" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="mrr" name="MRR" fill="#10B981" radius={[6, 6, 0, 0]} />
                <Bar dataKey="outflow" name="Outflow" fill="#EF4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI tiles (right column) */}
        <div className="grid gap-4">
          <Stat label="Total Inflow" value={120_000_000} delta={0.025} positive />
          <Stat label="MRR" value={50_000_000} delta={0.025} positive />
          <Stat label="Total Outflow" value={100_000_000} delta={0.021} positive={false} />
        </div>
      </div>
    </section>
  );
}
