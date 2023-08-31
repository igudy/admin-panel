import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Customers from "../components/Customers";
import SubscriptionTrend from "../components/SubscriptionTrend";
import Gender from "../components/Gender";
import TopCustomers from "../components/TopCustomers";
import GeographicalDistribution from "../components/GeographicalDistribution";
import TopStates from "../components/TopStates";
import { Container, Row, Col } from "react-bootstrap";

const Homepage = () => {
  return (
    <>
      {/* Flex */}
      <div className="flex font-montserrat">
        <div className="flex-col">
          <div className=" pl-5 mr-3 flex">
            <div>
              <Sidebar />
            </div>
            <div className="bg-gray-200 h-[81vh] w-[2px]"></div>
          </div>

          <div className="bg-gray-200 h-[2px] w-[96%]"></div>
        </div>

        <div>
          <Navbar />
          <div className="bg-gray-200 mt-2 ml-[-0.9rem] h-[2px] w-[80vw]"></div>

          <div>
            <div className="mt-4">
              <Customers />
            </div>
            {/* Flex */}
            <div className="">
              <div className="flex">
                <SubscriptionTrend />
                <div className="">
                  <Gender />
                  <TopCustomers />
                </div>
              </div>
            </div>
            {/* Geographical Distribution - Flex */}
            <div className="flex mb-10">
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
