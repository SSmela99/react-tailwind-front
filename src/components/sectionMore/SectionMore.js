import React from "react";

import graph from "assets/graph.png";
import giftbox from "assets/giftbox.png";

const SectionMore = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto lg:py-32 md:py-24 py-16 px-5">
        <div className="block md:flex justify-center items-center relative">
          <div className="text-center flex-col w-full md:w-1/2 md:border-r md:border-b-0 border-b md:pb-0 pb-10">
            <div className="h-40 w-40 bg-purple-200 flex items-center justify-center mx-auto mb-5">
              <img src={graph} alt="graph" className="w-3/4" />
            </div>
            <h1 className="font-bold text-4xl text-gray-600 py-2">
              Quip for Sales
            </h1>
            <p className="font-light text-lg max-w-md mx-auto py-2">
              Transform your sales processes in Salesforce and spend more time
              selling.
            </p>
            <div className="flex text-blue-400 items-center justify-center">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center flex-col w-full md:w-1/2 md:pt-0 pt-10">
            <div className="h-40 w-40 bg-purple-200 flex items-center justify-center mx-auto mb-5">
              <img src={giftbox} alt="graph" className="w-3/4" />
            </div>
            <h1 className="font-bold text-4xl text-gray-600 py-2">
              Quip for Services
            </h1>
            <p className="font-light text-lg max-w-md mx-auto py-2">
              Empower team with live case swarming in real time inside
              Salesforce.
            </p>
            <div className="flex text-blue-400 items-center justify-center">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionMore;
