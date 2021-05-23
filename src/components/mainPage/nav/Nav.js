import React, { useState, useCallback } from "react";

import clsx from "clsx";
import logo from "assets/logo.png";

const Nav = () => {
  const [visProduct, setVisProduct] = useState(false);
  const [visSolutions, setVisSolutions] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, [mobileMenu]);

  return (
    <>
      <nav className="w-full lg:h-32 h-24 flex justify-between align-center">
        <div className="flex align-center flex-col sm:flex-row justify-center h-full z-50">
          <img
            src={logo}
            alt="logo"
            className="lg:w-32 sm:w-24 w-20 lg:h-24 sm:h-16 h-12 self-center"
          />
          <p
            className={clsx(
              "lg:ml-4 ml-2 self-center font-semibold lg:text-xl text-base text-black transition duration-300 title",
              mobileMenu && "text-white"
            )}
          >
            Company Name
          </p>
        </div>
        <ul className="hidden md:flex justify-between align-center text-md text-black font-medium">
          <li
            className="self-center lg:p-3.5 p-1.5 lg:mx-4 mx-2 relative"
            onMouseOver={() => setVisProduct(!visProduct)}
            onMouseOut={() => setVisProduct(false)}
          >
            <p className="text-sm lg:text-base">Product</p>
            <div
              className={clsx(
                "absolute top-12 bg-white -left-10 min-w-max rounded-xl shadow-2xl duration-300 h-0 overflow-hidden opacity-0 z-50",
                visProduct && "on"
              )}
            >
              <div className="px-12 pt-6">
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">Overview</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Productivy for Salesforce customers
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">Platform</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Scalable platform for enterprises
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">Security</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Data protection, privacy and control
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">Templates</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Get started with any use-case
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">
                    Virtual Private Cloud
                  </p>
                  <p className="text-gray-400 text-sm font-normal">
                    Single-tenant cloud deployment
                  </p>
                </div>
              </div>
              <div className="border-t">
                <p className="text-yellow-500 text-center font-bold p-5">
                  Try for Free
                </p>
              </div>
            </div>
          </li>
          <li
            className="self-center lg:p-3.5 p-1.5 lg:mx-4 mx-2 relative"
            onMouseOver={() => setVisSolutions(!visSolutions)}
            onMouseOut={() => setVisSolutions(false)}
          >
            <p className="text-sm lg:text-base">Solutions</p>
            <div
              className={clsx(
                "absolute top-12 bg-white -left-10 min-w-max rounded-xl shadow-2xl duration-300 h-0 overflow-hidden opacity-0 z-50",
                visSolutions && "on"
              )}
            >
              <div className="px-12 py-6">
                <div className="mb-4">
                  <p className="text-base font-bold mb-1">Overview</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Productivy for Salesforce customers
                  </p>
                </div>
                <div>
                  <p className="text-base font-bold mb-1">Platform</p>
                  <p className="text-gray-400 text-sm font-normal">
                    Scalable platform for enterprises
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="self-center lg:p-3.5 p-1.5 lg:mx-4 mx-2">
            <p className="text-sm lg:text-base">Pricing</p>
          </li>
          <li className="self-center lg:p-3.5 p-1.5 lg:mx-4 mx-2">
            <p className="text-sm lg:text-base">Contact</p>
          </li>
          <li className="self-center lg:p-3.5 p-1.5 lg:mx-4 mx-2">
            <p className="text-sm lg:text-base">Sign In</p>
          </li>
        </ul>
        <div
          className="self-center md:hidden block h-10 w-10 cursor-pointer z-50"
          onClick={handleMobileMenu}
        >
          <div className="w-full h-full relative">
            <span className={clsx("navBtn", mobileMenu && "menuOn")}></span>
          </div>
        </div>
        <div
          className={clsx(
            "h-auto w-full bg-dark absolute block md:hidden left-0 mobileMenu transition duration-300 z-20",
            mobileMenu ? "opacity-1" : "opacity-0"
          )}
        >
          <div className="sm:h-24 h-28 w-full" />
          <div className="xl:mx-auto px-5 pb-6 xl:px-0 text-white">
            <div className="mb-5">
              <h5 className="font-semibold text-xl">Product</h5>
              <p className="text-sm font-light py-2">Overview</p>
              <p className="text-sm font-light py-2">Platform</p>
              <p className="text-sm font-light py-2">Security</p>
              <p className="text-sm font-light py-2">Templates</p>
              <p className="text-sm font-light py-2">Virtual Private Cloud</p>
            </div>
            <div className="mb-5">
              <h5 className="font-semibold text-lg">Solutions</h5>
              <p className="text-sm font-light py-2">By Industry</p>
              <p className="text-sm font-light py-2">By Role</p>
            </div>
            <h5 className="mb-5 font-semibold text-lg">Pricing</h5>
            <h5 className="mb-5 font-semibold text-lg">Contact</h5>
            <h5 className="mb-5 font-semibold text-lg">Sign In</h5>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
