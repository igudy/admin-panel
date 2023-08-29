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
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <div>
            <Customers />
            {/* Flex */}
            <div className="flex">
              <SubscriptionTrend />
              <div className="flex flex-col">
                `<Gender />
                <TopCustomers />`
              </div>
              {/* Geographical Distribution - Flex */}
              <div className="flex">
                <GeographicalDistribution />
                <TopStates />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
