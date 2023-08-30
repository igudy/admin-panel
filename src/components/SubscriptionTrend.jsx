import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../data/data";

const SubscriptionTrend = () => {
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
          <h1>Responsive Container</h1>
          {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={20}
              height={30}
              data={lineChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#82ca9d" // Green color for Personal_subscribers
                activeDot={{ r: 8 }}
                name="Subscriber Count"
              />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </>
  );
};

export default SubscriptionTrend;
