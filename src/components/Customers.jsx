import React from "react";
import { customers, topCustomers } from "../data/data";

const Customers = () => {
  return (
    <div className="mt-8">
      <p className="text-gray-500">Friday, August 4th</p>
      <p className="text-lg font-semibold">Good morning, Olamide</p>
      {customers.map((data) => (
        <>
          <div className="flex gap-5">
            <div className="flex-col">
              {data.image}
              {data.name}
              <div className="flex gap-4">{data.number}</div>
              {data.description}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Customers;
