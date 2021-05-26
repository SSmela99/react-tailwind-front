import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-slick";
import clsx from "clsx";

import redSlide from "assets/redSlide.png";
import greenSlide from "assets/greenSlide.png";
import blueSlide from "assets/blueSlide.png";
import yellowSlide from "assets/yellowSlide.png";

const SectionAbout = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slider = useRef();

  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (current, next) => setSlideIndex(next),
    afterChange: (current) => setSlideIndex(current),
  };

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  return (
    <div
      className={clsx(
        "w-100 lg:py-20 pb-20 pt-10 transition-all duration-500",
        slideIndex === 0 && "redBg",
        slideIndex === 1 && "greenBg",
        slideIndex === 2 && "blueBg",
        slideIndex === 3 && "yellowBg"
      )}
    >
      <div className="xl:container mx-auto px-5">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-gray-700">What is Quip?</h1>
          <p className="max-w-3xl mx-auto py-5 text-gray-600 leading-7">
            Quip for Customer 360 is the easiest way for Salesforce customers to
            transform processes like Account Planning, Mutual Close Plans, and
            Case Swarms. Standardize, automate and embed real-time,
            collaborative documents inside Salesforce records.
          </p>
          <div className="text-white text-lg lg:block hidden">
            <button className="bg-blue-500 hover:bg-blue-600 font-semibold mx-2 py-2 px-5 rounded shadow-md">
              Contact Sales
            </button>
            <button className="bg-blue-400 hover:bg-blue-600 font-semibold mx-2 py-2 px-5 rounded shadow-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:flex align-center items-center w-100 mt-20 hidden">
          <div className="w-1/2 mr-5 shadow-xl">
            <Carousel ref={slider} {...settings}>
              <img src={redSlide} alt="redSlide" className="h-full w-full" />
              <img
                src={greenSlide}
                alt="greenSlide"
                className="h-full w-full"
              />
              <img src={blueSlide} alt="blueSlide" className="h-full w-full" />
              <img
                src={yellowSlide}
                alt="yellowSlide"
                className="h-full w-full"
              />
            </Carousel>
          </div>
          <div className="w-1/2 cursor-pointer flex flex-col items-end pr-5">
            <div
              className="my-4 max-w-xl redHeader transition-all"
              onClick={() => setSlideIndex(0)}
            >
              <h1 className="text-xl font-bold text-gray-700">
                <span className="redSpan">Documents </span>that fuel a culture
                of action
              </h1>
              <p className="font-light text-sm max-w-lg pt-2 leading-6">
                Quip documents unite your team’s work and communication, so you
                can get everything done in one place.
              </p>
            </div>
            <div
              className="my-4 max-w-xl greenHeader transition-all"
              onClick={() => setSlideIndex(1)}
            >
              <h1 className="text-xl font-bold text-gray-700">
                <span className="greenSpan">Spreadsheets</span> that turn
                numbers into decisions
              </h1>
              <p className="font-light text-sm max-w-lg pt-2 leading-6">
                Embed spreadsheets into documents to give data the context your
                team needs to make critical decisions.
              </p>
            </div>
            <div
              className="my-4 max-w-xl blueHeader transition-all"
              onClick={() => setSlideIndex(2)}
            >
              <h1 className="text-xl font-bold text-gray-700">
                <span className="blueSpan transition-all">Slides</span> that
                drive engagement & feedback
              </h1>
              <p className="font-light text-sm max-w-lg pt-2 leading-6">
                Team-based slides that quickly and clearly get you to the right
                decision — with fewer, better meetings, and no messy file
                versions.
              </p>
            </div>
            <div
              className="my-4 max-w-xl yellowHeader transition-all"
              onClick={() => setSlideIndex(3)}
            >
              <h1 className="text-xl font-bold text-gray-700">
                <span className="yellowSpan">Chat</span> that breaks down
                information silos
              </h1>
              <p className="font-light text-sm max-w-lg pt-2 leading-6">
                Streamline your workflow with team chat built into every
                document and spreadsheet; plus team chat rooms and 1:1
                messaging.
              </p>
            </div>
          </div>
        </div>
        <div className="block lg:hidden px-5">
          <div className="py-2">
            <Carousel {...settings}>
              <div className="text-center">
                <img src={redSlide} alt="redSlide" className="mb-10" />
                <h1 className="text-xl font-bold text-gray-700">
                  <span className="text-red-500">Documents </span>that fuel a
                  culture of action
                </h1>
                <p className="font-light text-sm pt-2 leading-6">
                  Quip documents unite your team’s work and communication, so
                  you can get everything done in one place.
                </p>
              </div>

              <div className="text-center">
                <img src={greenSlide} alt="greenSlide" className="mb-10" />
                <h1 className="text-xl font-bold text-gray-700">
                  <span className="text-green-500">Spreadsheets</span> that turn
                  numbers into decisions
                </h1>
                <p className="font-light text-sm pt-2 leading-6">
                  Embed spreadsheets into documents to give data the context
                  your team needs to make critical decisions.
                </p>
              </div>

              <div className="text-center">
                <img src={blueSlide} alt="blueSlide" className="mb-10" />
                <h1 className="text-xl font-bold text-gray-700">
                  <span className="text-blue-500">Slides</span> that drive
                  engagement & feedback
                </h1>
                <p className="font-light text-sm pt-2 leading-6">
                  Team-based slides that quickly and clearly get you to the
                  right decision — with fewer, better meetings, and no messy
                  file versions.
                </p>
              </div>

              <div className="text-center">
                <img src={yellowSlide} alt="yellowSlide" className="mb-10" />
                <h1 className="text-xl font-bold text-gray-700">
                  <span className="text-yellow-500">Chat</span> that breaks down
                  information silos
                </h1>
                <p className="font-light text-sm pt-2 leading-6">
                  Streamline your workflow with team chat built into every
                  document and spreadsheet; plus team chat rooms and 1:1
                  messaging.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionAbout.defaultProps = {
  slideIndex: 0,
};

export default SectionAbout;
