import React from "react";

import chat from "assets/chat.png";

const Footer = () => {
  return (
    <footer className="w-100 bg-gray-700 py-24 px-5">
      <div className="container mx-auto">
        <div className="grid border-b border-gray-400 pb-6">
          <img
            src={chat}
            alt="chat"
            className="w-16 h-16 md:mr-12 mr-0 md:mr-4 mb-4 md:mb-0 footer-item-a"
          />
          <div className="text-white font-light footerInformations footer-item-b">
            <h2 className="font-semibold text-lg">Product</h2>
            <p className="py-1">Overview</p>
            <p className="py-1">Platform</p>
            <p className="py-1">Security</p>
            <p className="py-1">Quip Private Cloud</p>
            <p className="py-1">Pricing</p>
            <p className="py-1">Templates</p>
          </div>
          <div className="text-white font-light mb-4 md:mb-0 footerInformations footer-item-c">
            <h2 className="font-semibold text-lg">Resources</h2>
            <p className="py-1">Training</p>
            <p className="py-1">Support</p>
            <p className="py-1">Resource Library</p>
            <p className="py-1">Release Notes</p>
            <p className="py-1">Download Quip</p>
            <p className="py-1">Developers/Api</p>
            <p className="py-1">Privacy Policy</p>
            <p className="py-1">Terms and Conditions</p>
            <p className="py-1">Cookies</p>
          </div>
          <div className="text-white font-light footerInformations footer-item-d">
            <h2 className="font-semibold text-lg">Company</h2>
            <p className="py-1">About Us</p>
            <p className="py-1">Jobs</p>
            <p className="py-1">Blog</p>
            <p className="py-1">Contact us</p>
          </div>
          <div className="box-border text-white mt-4 mx-auto lg:mx-0 lg:mt-0 footer-item-e mt-4 md:mt-0 text-center sm:text-left">
            <h2 className="font-semibold text-md">Start Using It Today</h2>
            <div className="flex sm:flex-row flex-col my-2">
              <input
                placeholder="Enter your work email"
                className="py-2 px-3 text-gray-400 rounded bg-transparent border border-gray-400 sm:mr-2 mr-0 mb-3 sm:mb-0"
              />
              <button className="bg-blue-500 text-white font-semibold p-3 rounded">
                Get Started
              </button>
            </div>
            <p className="font-light">Call us: 123-456-789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
