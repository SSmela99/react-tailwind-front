import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-yellow-200">
      <div className="container md:flex block mx-auto px-5 py-6">
        <div className="md:w-4/5 w-full text-gray-700 text-center md:text-left mr-10">
          <h1 className="md:text-4xl text-2xl font-semibold">
            Reopening will be a journey. Work.com is your guide.
          </h1>
          <p className="my-3 font-light md:text-lg text-md">
            An all-new suite of apps, expertise, and services to manage this
            crisis today and thrive tomorrow.
          </p>
        </div>
        <div className="md:w-1/5 w-full flex items-center justify-center mt-5 md:mt-0">
          <button className="text-white bg-gray-700 px-6 py-3 shadow-xl rounded md:text-lg text-md font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
