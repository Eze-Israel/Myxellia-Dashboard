"use client";

import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";

type Range = "1w" | "1m" | "1y";

type ChartRow = {
  label: string;
  Totalinflow: number;
  mrr: number;
  GMV: number;
  CommissionRevenue: number;
};

const DATA: Record<Range, ChartRow[]> = {
  "1w": [
    { label: "Mon", Totalinflow: 18_000_000, mrr: 6_000_000, CommissionRevenue: 10_000_000, GMV: 1_000_000 },
    { label: "Tue", Totalinflow: 12_000_000, mrr: 4_000_000, CommissionRevenue: 8_000_000,  GMV: 1_000_000 },
    { label: "Wed", Totalinflow: 26_000_000, mrr: 9_000_000, CommissionRevenue: 15_000_000, GMV: 1_000_000 },
    { label: "Thu", Totalinflow: 15_000_000, mrr: 5_000_000, CommissionRevenue: 9_000_000,  GMV: 1_000_000 },
    { label: "Fri", Totalinflow: 36_000_000, mrr: 12_000_000, CommissionRevenue: 20_000_000, GMV: 1_000_000 },
    { label: "Sat", Totalinflow: 22_000_000, mrr: 7_000_000, CommissionRevenue: 13_000_000, GMV: 1_000_000 },
    { label: "Sun", Totalinflow: 28_000_000, mrr: 9_500_000, CommissionRevenue: 16_000_000, GMV: 1_000_000 },
  ],
  "1m": [
    { label: "Wk 1", Totalinflow: 65_000_000, mrr: 20_000_000, CommissionRevenue: 42_000_000, GMV: 1_000_000 },
    { label: "Wk 2", Totalinflow: 72_000_000, mrr: 22_000_000, CommissionRevenue: 40_000_000, GMV: 1_000_000 },
    { label: "Wk 3", Totalinflow: 80_000_000, mrr: 25_000_000, CommissionRevenue: 48_000_000, GMV: 1_000_000 },
    { label: "Wk 4", Totalinflow: 68_000_000, mrr: 21_000_000, CommissionRevenue: 44_000_000, GMV: 1_000_000 },
  ],
  "1y": [
    { label: "Jan", Totalinflow: 24_000_000, mrr: 8_000_000,  CommissionRevenue: 14_000_000, GMV: 1_000_000 },
    { label: "Feb", Totalinflow: 30_000_000, mrr: 10_000_000, CommissionRevenue: 16_000_000, GMV: 1_000_000 },
    { label: "Mar", Totalinflow: 26_000_000, mrr: 9_000_000,  CommissionRevenue: 15_000_000, GMV: 1_000_000 },
    { label: "Apr", Totalinflow: 40_000_000, mrr: 13_000_000, CommissionRevenue: 22_000_000, GMV: 1_000_000 },
    { label: "May", Totalinflow: 32_000_000, mrr: 11_000_000, CommissionRevenue: 18_000_000, GMV: 1_000_000 },
    { label: "Jun", Totalinflow: 45_000_000, mrr: 15_000_000, CommissionRevenue: 25_000_000, GMV: 1_000_000 },
    { label: "Jul", Totalinflow: 36_000_000, mrr: 12_000_000, CommissionRevenue: 20_000_000, GMV: 1_000_000 },
    { label: "Aug", Totalinflow: 50_000_000, mrr: 17_000_000, CommissionRevenue: 28_000_000, GMV: 1_000_000 },
    { label: "Sep", Totalinflow: 42_000_000, mrr: 14_000_000, CommissionRevenue: 24_000_000, GMV: 1_000_000 },
    { label: "Oct", Totalinflow: 48_000_000, mrr: 16_000_000, CommissionRevenue: 26_000_000, GMV: 1_000_000 },
    { label: "Nov", Totalinflow: 54_000_000, mrr: 18_000_000, CommissionRevenue: 30_000_000, GMV: 1_000_000 },
    { label: "Dec", Totalinflow: 60_000_000, mrr: 20_000_000, CommissionRevenue: 34_000_000, GMV: 1_000_000 },
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
      className={`p-2 text-xs
        ${active ? "bg-gray-200 text-black border-white rounded-lg font-bold" : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100 rounded-xl"}`}
      type="button"
    >
      {children}
    </button>
  );
}

function Delta({
  value,
  positive,
}: {
  value: number;
  positive: boolean;
}) {
  const Arrow = positive ? ArrowUp : ArrowDown;
  return (
    <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
      <span className={`inline-flex items-center justify-center rounded-full border ${positive ? "bg-emerald-500 border-emerald-200" : "bg-rose-500 border-rose-200"} text-white w-4 h-4`}>
        <Arrow className="h-3 w-3" />
      </span>
      {(value * 100).toFixed(1)}%
    </span>
  );
}

function Stat({
  label,
  value,
  delta,
  positive = true,
  amountClassName,
}: {
  label: string;
  value: number;
  delta?: number;
  positive?: boolean;
  amountClassName: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className={`text-2xl font-extrabold tracking-tight ${amountClassName}`}>{NGN.format(value)}</div>
      <div className="mt-1 text-sm text-gray-600 flex items-center">
        <span className="font-medium">{label}</span>
        {typeof delta === "number" && <Delta value={delta} positive={positive} />}
      </div>
    </div>
  );
}

export default function SalesOverview() {
  const [range, setRange] = useState<Range>("1y");
  const chartData = useMemo(() => DATA[range], [range]);

  // keep same visual width per category across ranges (scroll when needed)
  const pixelsPerCategory = 80; // bar group width
  const innerWidth = Math.max(chartData.length * pixelsPerCategory + 80, 720);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white">
      {/* DASH-B */}
      <div className="flex md:flex-row md:items-center md:justify-between px-2 mb-4 ">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight">Sales Overview</h2>
          <p className="text-sm text-gray-600 mt-2">Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <button
            type="button"
            className="rounded-full  border border-gray-300 px-6 py-2.5 text-sm  bg-white hover:bg-gray-100"
          >
            View Transactions
          </button>
         </div>

          <div className="hidden md:flex justify-end  gap-2  px-1">
            <Tab active={range === "1w"} onClick={() => setRange("1w")}>1 Week</Tab>
            <Tab active={range === "1m"} onClick={() => setRange("1m")}>1 Month</Tab>
            <Tab active={range === "1y"} onClick={() => setRange("1y")}>1 Year</Tab>
        </div>

      <div className="h-px bg-gray-200" />

      {/* Body */}
      <div className="grid grid-cols-1 gap-6 p-6">
        {/* Chart */}
        <div className="overflow-x-auto">
          <div className="h-[320px]" style={{ minWidth: innerWidth }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barCategoryGap={16} barGap={6}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis tickFormatter={(v) => `${Math.round(v / 1_000_000)}m`} />
                <Tooltip formatter={(v: number) => NGN.format(v)} />
                <Legend />
                {/* Fixed bar size for consistent look across ranges */}
                <Bar dataKey="Totalinflow"         name="Total Inflow"        fill="#3B82F6" radius={[6, 6, 0, 0]} barSize={14} />
                <Bar dataKey="mrr"                  name="MRR"                 fill="#10B981" radius={[6, 6, 0, 0]} barSize={14} />
                <Bar dataKey="GMV"                  name="GMV"                 fill="#EF4444" radius={[6, 6, 0, 0]} barSize={14} />
                <Bar dataKey="CommissionRevenue"    name="Commission Revenue"  fill="#10B981" radius={[6, 6, 0, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Total Inflow"        value={120_000_000} delta={0.025} positive amountClassName="text-indigo-600" />
          <Stat label="MRR"                 value={50_000_000}  delta={0.025} positive amountClassName="text-emerald-600" />
          <Stat label="Commission Revenue"  value={200_000_000} delta={0.005} positive amountClassName="text-emerald-600" />
          <Stat label="GMV"                 value={100_000_000} delta={0.005} positive={false} amountClassName="text-rose-600" />
        </div>
      </div>
    </section>
  );
}

