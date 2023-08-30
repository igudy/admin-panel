import React from "react";
import { topCustomers } from "../data/data";

const TopCustomers = () => {
  return (
    <div className="border-2 rounded-lg ml-10 p-5 mt-3">
      <p>Top Customers This Week</p>
      <div>
        {topCustomers.map((topCustomer) => (
          <div key={topCustomer.id} className="flex gap-2 my-2">
            <div className="text-gray-400">{topCustomer.id}</div>
            <div className="bg-[#E0FFE0] w-6 h-6 rounded-full">
              <p className="text-center justify-center">
                {topCustomer.initials}
              </p>
            </div>
            <div className="text-gray-400">{topCustomer.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomers;
