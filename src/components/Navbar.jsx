import React from "react";
import Notification from "../assets/notifications.png";
import Dropdown from "../assets/dropdown.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex mt-5 justify-between gap-24">
        <div className="font-semibold text-xl">Dashboard</div>
        <div className="flex justify-between gap-4 mx-16">
          <img
            className="h-[24px] w-[24px]"
            src={Notification}
            alt="notification"
          />{" "}
          <div className="bg-[#E0FFE0] w-10 h-10 mt-[-8px] rounded-full">
            <p className="flex-row font-semibold p-2">AD</p>{" "}
          </div>
          <img
            className="h-[6px] w-[10px] mt-2"
            src={Dropdown}
            alt="dropdown"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
