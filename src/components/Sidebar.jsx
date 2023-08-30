import React from "react";
import Adornment from "../assets/adornment.png";
import Settings from "../assets/settings.png";
import Logout from "../assets/logout.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col mr-14">
      <div className="border-r-2 border-b-2">
        <div className="text-3xl font-semibold">
          <p className="text-[#146614] px-10">Valubah</p>
        </div>
        <div className="mt-5 px-5 py-1 bg-[#E0FFE0] rounded-lg flex">
          <img
            src={Adornment}
            className="h-[18px] ml-1 mt-2 w-[18px]"
            alt="dashboard-icon"
          />
          <p className="pt-[5px] ml-2">Dashboard</p>
        </div>
        <div className="mt-[20rem] px-5 py-1 rounded-lg flex">
          <img
            src={Settings}
            className="h-[18px] ml-1 mt-2 w-[18px]"
            alt="dashboard-icon"
          />
          <p className="pt-[5px] ml-2">Settings</p>
        </div>
        <div className="m px-5 py-1 rounded-lg flex">
          <img
            src={Logout}
            className="h-[18px] ml-1 mt-2 w-[18px]"
            alt="dashboard-icon"
          />
          <p className="pt-[5px] ml-2">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
