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
            <Customers />
            {/* Flex */}
            <div className="flex">
              <SubscriptionTrend />
              <div>
                <Gender />
                <TopCustomers />
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
