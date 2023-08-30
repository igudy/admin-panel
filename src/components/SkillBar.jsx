import React from "react";

const SkillBar = ({ skill, user }) => {
  let bgColorClass = "";
  if (user >= 80) {
    bgColorClass = "bg-green-500";
  } else if (user >= 60) {
    bgColorClass = "bg-blue-500";
  } else {
    bgColorClass = "bg-red-500";
  }

  return (
    <div className="flex flex-col mb-4">
      <div className="font-bold">{skill}</div>
      <div className="w-[26vh] h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full ${bgColorClass}`}
          style={{ width: `${user}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
