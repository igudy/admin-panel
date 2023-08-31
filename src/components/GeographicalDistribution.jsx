import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { geographicalDistribution } from "../data/data";

const GeographicalDistribution = () => {
  return (
    <>
      <div className="flex flex-col rounded-lg border-2 p-3 my-5">
        <div className="flex">
          <div className="flex gap-7">
            <p className="font-bold mt-5 mb-10">Geographical Distribution</p>
          </div>
        </div>

        {/* Graph */}
        <BarChart
          width={800}
          height={350}
          data={geographicalDistribution}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#146614" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </>
  );
};

export default GeographicalDistribution;
