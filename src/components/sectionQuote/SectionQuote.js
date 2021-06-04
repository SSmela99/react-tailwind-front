import React from "react";

import quote from "assets/quote.png";

const QuoteSecion = () => {
  return (
    <>
      <div className="w-100 bg-gray-300 py-24 px-5">
        <div className=" max-w-5xl mx-auto">
          <div className="flex justify-center items-center py-4">
            <img src={quote} alt="quote" className="w-10 h-10" />
            <p className="px-5 text-xl text-gray-600 italic">
              More than ever in our industry our teams need to remain connected
              and efficient; Quip is the simple answer to enable this global
              collaboration!
            </p>
            <img
              src={quote}
              alt="quote"
              className="w-10 h-10 transform rotate-180"
            />
          </div>
          <div className="ml-16 text-xs">
            <p className="font-semibold">Adam Smith</p>
            <p className="font-light">
              Senior Project Leader, Digital Enablement
            </p>
          </div>
        </div>
      </div>
      <div className="newsletter w-100 py-24 px-5 bg-gray-500">
        <h1 className="font-bold text-3xl text-center text-white mb-3">
          Try for free!
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            className="w-3/4 sm:w-2/6 py-3 px-3 mr-0 sm:mr-3 text-gray-600 max-w-sm rounded"
            placeholder="Enter your work email"
          />
          <button className="w-3/4 sm:w-1/6 bg-red-500 text-center text-white py-3 sm:max-w-xs max-w-sm mt-2 sm:mt-0 rounded shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteSecion;
