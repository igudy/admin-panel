import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { genderData } from "../data/data";
import Male from "../assets/male.png";
import Female from "../assets/female.png";

export const COLORS = ["#146614", "#FBCBC9"];

const Gender = () => {
  return (
    <div className="border-2 rounded-lg ml-20 p-5">
      <div className="font-[600]">Gender Distribution</div>
      <PieChart width={200} height={150}>
        <Pie
          data={genderData}
          cx={100}
          cy={100}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {genderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="ml-8">
        <div className="flex gap-7 mt-[-20px] justify-center">
          <div className="text-[#146614] flex">
            <img src={Male} alt="male" className=" h-6 w-2 mr-1" />
            Male
          </div>
          <div className="text-[#FBCBC9] flex ">
            <img src={Female} alt="female" className="h-6 w-2 mr-1" />
            Female
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
