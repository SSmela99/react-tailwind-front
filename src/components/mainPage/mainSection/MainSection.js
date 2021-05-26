import React from "react";

import person1 from "assets/person.jpg";
import person2 from "assets/person2.jpg";
import person3 from "assets/person3.jpg";

const MainSection = () => {
  return (
    <div className="lg:flex items-center sm:px-5 lg:mt-0 mainSection">
      <div className="xl:max-w-xl lg:max-w-md max-w-md max-w-full lg:my-0 my-7">
        <h1 className="font-extrabold lg:text-5xl text-3xl text-gray-500 text-center lg:text-left">
          Introducing Salesforce Anywhere
        </h1>
        <p className="font-light text-lg my-8">
          Aliquip minim pariatur aliquip ullamco ex sit adipisicing elit.
          Deserunt aliquip reprehenderit excepteur esse sunt velit exercitation
          sint sunt ut veniam. Deserunt occaecat eiusmod ipsum commodo labore
          officia et mollit quis amet officia et. Exercitation labore do sit
          veniam velit laboris non non deserunt excepteur qui magna magna
          aliquip.
        </p>
        <button className="bg-blue-500 px-6 py-2 text-white font-bold text-lg shadow-xl rounded-lg block mx-auto lg:mx-0">
          Learn More
        </button>
      </div>
      <div className="flex-grow ml-10 mt-10 lg:mt-0">
        <div className="flex-col">
          <div className="relative xl:block flex lg:justify-end justify-center">
            <div className="bg-white max-w-sm px-4 pl-2 pr-5 py-4 shadow-xl rounded-3xl relative xl:mb-5 mb-12 xl:ml-24 mr-9">
              <p className="ml-10 font-semibold text-md">
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
              </p>
              <img
                src={person1}
                alt="person"
                className="w-20 h-20 block bg-yellow-500 rounded-full absolute -bottom-8 -left-10"
              ></img>
            </div>
          </div>
          <div className="relative flex lg:justify-end justify-center">
            <div className="bg-white max-w-sm pl-6 pr-3 py-4 shadow-xl rounded-3xl relative xl:mb-5 mb-12 mr-9">
              <p className="mr-10 font-semibold text-md">
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
              </p>
              <img
                src={person2}
                alt=""
                className="w-20 h-20 block bg-blue-500 rounded-full absolute -bottom-8 -right-7"
              ></img>
            </div>
          </div>
          <div className="relative xl:block flex lg:justify-end justify-center">
            <div className="bg-white max-w-sm pl-2 pr-5 py-4 shadow-xl rounded-3xl relative xl:ml-24 mr-9">
              <p className="ml-10 font-semibold text-md">
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
                Excepteur irure pariatur sint dolor ea amet eiusmod cillum.
              </p>
              <img
                alt="person3"
                src={person3}
                className="w-20 h-20 block bg-green-500 rounded-full absolute -bottom-8 -left-10"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
