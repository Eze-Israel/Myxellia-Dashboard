"use client";

import { useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
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
    { label: "Mon", Totalinflow: 18_000_000, mrr: 6_000_000, CommissionRevenue: 10_000_000, GMV:10_000_00},
    { label: "Tue", Totalinflow: 12_000_000, mrr: 4_000_000, CommissionRevenue: 8_000_000 , GMV:10_000_00},
    { label: "Wed", Totalinflow: 26_000_000, mrr: 9_000_000, CommissionRevenue: 15_000_000 , GMV:10_000_00},
    { label: "Thu", Totalinflow: 15_000_000, mrr: 5_000_000, CommissionRevenue: 9_000_000 , GMV:10_000_00},
    { label: "Fri", Totalinflow: 36_000_000, mrr: 12_000_000, CommissionRevenue: 20_000_000 , GMV:10_000_00},
    { label: "Sat", Totalinflow: 22_000_000, mrr: 7_000_000, CommissionRevenue: 13_000_000 , GMV:10_000_00},
    { label: "Sun", Totalinflow: 28_000_000, mrr: 9_500_000, CommissionRevenue: 16_000_000 , GMV:10_000_00},
  ],
  "1m": [
    { label: "Wk 1", Totalinflow: 65_000_000, mrr: 20_000_000, CommissionRevenue: 42_000_000 , GMV:10_000_00},
    { label: "Wk 2", Totalinflow: 72_000_000, mrr: 22_000_000, CommissionRevenue: 40_000_000 , GMV:10_000_00},
    { label: "Wk 3", Totalinflow: 80_000_000, mrr: 25_000_000, CommissionRevenue: 48_000_000 , GMV:10_000_00},
    { label: "Wk 4", Totalinflow: 68_000_000, mrr: 21_000_000, CommissionRevenue: 44_000_000 , GMV:10_000_00},
  ],
  "1y": [
    { label: "Jan", Totalinflow: 24_000_000, mrr: 8_000_000, CommissionRevenue: 14_000_000 , GMV:10_000_00},
    { label: "Feb", Totalinflow: 30_000_000, mrr: 10_000_000, CommissionRevenue: 16_000_000 , GMV:10_000_00},
    { label: "Mar", Totalinflow: 26_000_000, mrr: 9_000_000, CommissionRevenue: 15_000_000 , GMV:10_000_00},
    { label: "Apr", Totalinflow: 40_000_000, mrr: 13_000_000, CommissionRevenue: 22_000_000 , GMV:10_000_00},
    { label: "May", Totalinflow: 32_000_000, mrr: 11_000_000, CommissionRevenue: 18_000_000 , GMV:10_000_00},
    { label: "Jun", Totalinflow: 45_000_000, mrr: 15_000_000, CommissionRevenue: 25_000_000 , GMV:10_000_00},
    { label: "Jul", Totalinflow: 36_000_000, mrr: 12_000_000, CommissionRevenue: 20_000_000 , GMV:10_000_00},
    { label: "Aug", Totalinflow: 50_000_000, mrr: 17_000_000, CommissionRevenue: 28_000_000 , GMV:10_000_00},
    { label: "Sep", Totalinflow: 42_000_000, mrr: 14_000_000, CommissionRevenue: 24_000_000 , GMV:10_000_00},
    { label: "Oct", Totalinflow: 48_000_000, mrr: 16_000_000, CommissionRevenue: 26_000_000 , GMV:10_000_00},
    { label: "Nov", Totalinflow: 54_000_000, mrr: 18_000_000, CommissionRevenue: 30_000_000 , GMV:10_000_00},
    { label: "Dec", Totalinflow: 60_000_000, mrr: 20_000_000, CommissionRevenue: 34_000_000 , GMV:10_000_00},
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
        ${active ? "bg-gray-200 text-black border-white" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`}
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
  className:string
  positive?: boolean;
}) {
  const arrow = positive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="text-2xl font-extrabold tracking-tight">
        {NGN.format(value)}
      </div>
      <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
        <span className="font-medium">{label}</span>
        {typeof delta === "number" && (
          <div>
            <span
          
            className={`ml-auto inline-flex items-center gap-1 rounded-full px-0.5 py-0.5 text-xs border
            ${positive ? "text-white border-green-200 bg-green-500" : "text-white border-rose-200 bg-rose-500"}`}
          >
            {arrow}
            </span>
            {(delta * 100).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}

export default function SalesOverview() {
  const [range, setRange] = useState<Range>("1y");

  const chartData = useMemo(() => DATA[range], [range]);

  return (
       <><h1 className="font-bold text-2xl my-4">Welcome Ahmed,</h1>
        <section className="rounded-2xl border border-gray-200 bg-white ">
        <button
              type="button"
              className="rounded-full border border-gray-300 px-8 mb-3 py-4 text-sm font-semibold bg-white hover:bg-gray-50 float-right"
            >
              View Transactions
            </button>
      {/* Header */}
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between ">
        
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight mb-6">Sales Overview</h2>
          <p className="text-sm text-gray-600">Showing overview Jan 2022 - Sep 2022</p>
        </div>
        <div>  </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <Tab active={range === "1w"} onClick={() => setRange("1w")}>1 Week</Tab>
            <Tab active={range === "1m"} onClick={() => setRange("1m")}>1 Month</Tab>
            <Tab active={range === "1y"} onClick={() => setRange("1y")}>1 Year</Tab>
          </div>
          
        </div>
      </div>

      <div className="h-px bg-gray-200" />
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
                
                <Bar dataKey="Totalinflow" name="Total Inflow" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="mrr" name="MRR" fill="#10B981" radius={[6, 6, 0, 0]} />
                <Bar dataKey="GMV" name="GMV" fill="#EF4444" radius={[6, 6, 0, 0]} />
                <Bar dataKey="CommissionRenenue" name="Commision Revenue" fill="#EF4444" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 font-bold">
          <Stat label="Total Inflow" value={120_000_000} delta={0.025} positive  className="text-blue-400"/>
          <Stat label="MRR" value={50_000_000} delta={0.025} positive  className="text-blue-400"/>
          <Stat label="Commision Revenue" value={200_000_000} delta={0.005} positive  className="text-blue-400"/>
          <Stat label="GMV" value={100_000_000} delta={0.005} positive={false}  className="text-blue-400" />
        </div>
        
      </div>
    </section>
    </> 
  );
}
