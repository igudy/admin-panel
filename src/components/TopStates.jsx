import React from "react";
import SkillBar from "./SkillBar";

const TopStates = () => {
  return (
    <div>
      <div className="border-2 rounded-lg ml-10 p-5 mt-3">
        <p>Top States</p>
        <SkillBar skill="Lagos" user={80} />
        <SkillBar skill="Rivers" user={70} />
        <SkillBar skill="Ogun" user={40} />
        <SkillBar skill="Oyo" user={20} />
        <SkillBar skill="Delta" user={90} />
        {/* <SkillBar skill="FCT" user={80} /> */}
        <SkillBar skill="Borno" user={50} />
        <SkillBar skill="Edo" user={50} />
        <SkillBar skill="Cross-River" user={10} />
        <SkillBar skill="Akwa-Ibom" user={80} />
      </div>
    </div>
  );
};

export default TopStates;
