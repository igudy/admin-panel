import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Customers from "../components/Customers";
import SubscriptionTrend from "../components/SubscriptionTrend";
import Gender from "../components/Gender";
import TopCustomers from "../components/TopCustomers";
import GeographicalDistribution from "../components/GeographicalDistribution";
import TopStates from "../components/TopStates";

const Homepage = () => {
  return (
    <>
      {/* Flex */}
      <div className="flex font-montserrat">
        <div className="py-7 pl-5 border-r-2 border-b-2 mr-3">
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <div>
            <div className="border-t-2 mt-4">
              <Customers />
            </div>
            {/* Flex */}
            <div className="w-[100%]">
              <div className="flex basis-1/2">
                <SubscriptionTrend />
                <div className="basis-1/2">
                  <Gender />
                  <TopCustomers />
                </div>
              </div>
            </div>
            {/* Geographical Distribution - Flex */}
            <div className="flex">
              <GeographicalDistribution />
              <TopStates />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
