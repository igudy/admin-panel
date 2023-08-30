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
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex">
            <p>Subscription</p>
            <p>4th August 2023</p>
          </div>
          <div className="flex">
            <p>Today</p>
            <p>Week</p>
            <p>Month</p>
            <p>Custom</p>
          </div>
        </div>

        {/* Graph */}
        <div>
          Hello{" "}
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </>
  );
};

export default SubscriptionTrend;
