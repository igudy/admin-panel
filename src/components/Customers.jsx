import React from "react";
import { customers, topCustomers } from "../data/data";

const Customers = () => {
  return (
    <>
      <div className="flex-col mt-8">
        <p className="text-gray-500">Friday, August 4th</p>
        <p className="text-lg font-bold tracking-normal">
          Good morning, Olamide
        </p>
      </div>

      {/* Box section */}
      <div className="flex">
        {customers.map((data) => (
          <div
            key={data.id}
            className="flex border-2 rounded-lg my-5 mr-10 py-3 px-2"
          >
            <div className="flex-col mx-2">
              <div className="border-2 h-10 w-10 rounded-lg p-2">
                <img
                  src={data.image}
                  className="mb-6"
                  alt={`User ${data.id}`}
                />
              </div>
              <div className="text-md my-3">{data.name}</div>
              <div className="flex gap-18">
                <div className="text-2xl font-bold">{data.number}</div>
                <div className="bg-[#E0FFE0] rounded-xl ml-20 flex px-2 py-1">
                  <img
                    src={data.arrow}
                    className="h-3 w-2 mt-[7px] mr-1"
                    alt={`User ${data.arrow}`}
                  />
                  <div className="text-sm mt-1 font-bold">
                    {data.percentage}
                  </div>
                </div>
              </div>
              <div className="mt-5 text-gray-500">{data.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Customers;
