import React from "react";

import {
  apple,
  cisco,
  daegu,
  ea,
  googleDrive,
  playstation,
  slack,
  telegram,
  youtube,
} from "assets/Exports";

const Companies = () => {
  const companies = [
    apple,
    cisco,
    daegu,
    ea,
    googleDrive,
    playstation,
    slack,
    telegram,
    youtube,
  ];

  return (
    <div className="container mx-auto py-24 px-5">
      <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
        Trusted by businesses worldwide
      </h1>
      <div className="w-72 md:w-3/5 lg:w-5/6 flex justify-around items-center flex-wrap mx-auto">
        {companies.map((company) => {
          return (
            <img
              src={company}
              alt="company"
              className="lg:w-14 lg:h-14 w-12 h-12 m-4"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
