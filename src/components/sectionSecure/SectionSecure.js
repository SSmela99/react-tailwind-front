import React from "react";

import key from "assets/key.png";
import cloud from "assets/cloud-computing.png";
import shield from "assets/security.png";

const SectionSecure = () => {
  return (
    <div className="w-100 py-12">
      <div className="container mx-auto px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-700 leading-10 lg:text-center text-left">
          Secure productivity for the enterprise
        </h1>
        <p className="text-md lg:text-lg lg:max-w-4xl lg:mx-auto font-normal py-5 lg:py-10 leading-7 lg:text-center text-left">
          Quip is Salesforce’s productivity platform that transforms the way
          enterprises work together, delivering modern collaboration securely
          and simply across any device.
        </p>
        <div className="flex lg:flex-row flex-col w-100">
          <div className="lg:w-1/3 w-100 lg:pr-5 pr-0 securityPanels">
            <div className="flex items-center py-2">
              <img src={key} alt="key" className="w-8 h-8" />
              <p className="text-xl font-bold text-gray-700 ml-3">Security</p>
            </div>
            <p className="text-gray-600 leading-7">
              Trust is our #1 value. We work tirelessly to ensure all customers
              have the highest level of data protection, privacy, and control.
            </p>
            <div className="flex text-blue-400 items-center py-4">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-100 lg:px-5 px-0 securityPanels">
            <div className="flex items-center py-2">
              <img src={cloud} alt="cloud" className="w-8 h-8" />
              <p className="text-xl font-bold text-gray-700 ml-3">
                Virtual Private Cloud
              </p>
            </div>
            <p className="text-gray-600 leading-7">
              Deploy to a single-tenant virtual private cluster that’s managed
              as a service by Salesforce. You’re in complete control of
              geography, networking setup, and more.
            </p>
            <div className="flex text-blue-400 items-center py-4">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-100 lg:pl-5 securityPanels">
            <div className="flex items-center py-2">
              <img src={shield} alt="shield" className="w-8 h-8" />
              <p className="text-xl font-bold text-gray-700 ml-3">Security</p>
            </div>
            <p className="text-gray-600 leading-7">
              Quip’s advanced security features help enhance trust,
              transparency, compliance, and governance for the most
              security-conscious organizations.
            </p>
            <div className="flex text-blue-400 items-center py-4">
              <div className="flex text-blue-400 learnBtn">
                <p>Read the whitepaper</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="securityBg lg:mt-10"></div>
    </div>
  );
};

export default SectionSecure;
