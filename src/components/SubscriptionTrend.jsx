import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { lineChartData } from "../data/data";

const SubscriptionTrend = () => {
  // Functional component for CustomizedLabel
  const CustomizedLabel = ({ x, y, stroke, value }) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );

  // Functional component for CustomizedAxisTick
  const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );

  return (
    <>
      <div className="flex flex-col rounded-lg border-2 p-3">
        <div className="flex">
          <div className="flex gap-7">
            <p className="font-bold mt-4">Subscription Trend</p>
            <div className="border-2 p-2 mt-1 rounded-xl">
              <p className="text-gray-500">4th August 2023</p>
            </div>
          </div>
          <div className="flex ml-[7rem] mr-4 bg-[#F1F2F6] px-2 py-2 rounded-xl gap-7">
            <p className="bg-white px-5 py-1 rounded-xl">
              <span className="text-[#6B6C7E]">Today</span>
            </p>
            <p className="mt-1">Week</p>
            <p className="mt-1">Month</p>
            <p className="mt-1">Custom</p>
          </div>
        </div>

        {/* Graph */}
        <div>
          <LineChart
            width={800}
            height={350}
            data={lineChartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Business_Subscribers"
              stroke="#146614"
              label={<CustomizedLabel />}
            />
            <Line
              type="monotone"
              dataKey="Personal_Subscribers"
              stroke="#FBCBC9"
            />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default SubscriptionTrend;
