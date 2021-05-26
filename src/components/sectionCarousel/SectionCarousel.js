import React from "react";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const SectionCarousel = () => {
  const MyCarousel = () => (
    <div className="md:hidden block">
      <Carousel
        plugins={[
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            },
          },
        ]}
      >
        <div className="w-5/6 carouselItem">
          <div className="w-full sm:h-48 h-40 bg-green-700 shadow-2xl" />
          <div className="w-full bg-white p-5">
            <p className="text-lg font-semibold mb-3">
              Working From Home: Your Guide to Collaboration in Quip
            </p>
            <p className="text-md font-light">
              Learn how to keep momentum and continue collaborating in new ways.
            </p>
            <div className="flex text-blue-400 items-center py-3">
              <div className="flex text-blue-400 learnBtn">
                <p>Read</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 shadow-2xl carouselItem h-full">
          <div className="w-full sm:h-48 h-40 bg-yellow-700 shadow-2xl" />
          <div className="w-full bg-white p-5">
            <p className="text-lg font-semibold mb-3">
              Saleforce's Best Practises for Remotes Work in Quip
            </p>
            <p className="text-md font-light">
              Learn how to keep employees connected, build alignment, and
              execute business objectives without the office.
            </p>
            <div className="flex text-blue-400 items-center py-3">
              <div className="flex text-blue-400 learnBtn">
                <p>Watch</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 shadow-2xl carouselItem">
          <div className="w-full sm:h-48 h-40 bg-red-700 shadow-2xl" />
          <div className="w-full bg-white p-5">
            <p className="text-lg font-semibold mb-3">
              Salesforce Care: Salesforce’s Response to COVID-19
            </p>
            <p className="text-md font-light">
              Free rapid response solutions to help governments and companies
              navigate COVID-19.
            </p>
            <div className="flex text-blue-400 items-center py-3">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 shadow-2xl carouselItem">
          <div className="w-full sm:h-48 h-40 bg-blue-700 shadow-2xl" />
          <div className="w-full bg-white p-5">
            <p className="text-lg font-semibold mb-3">
              AppExchange COVID-19 Resource Center
            </p>
            <p className="text-md font-light">
              A dedicated resource page with solutions and content to help
              respond to the needs of your employees, customers, and community
              during this time.
            </p>
            <div className="flex text-blue-400 items-center py-3">
              <div className="flex text-blue-400 learnBtn">
                <p>Learn More</p>
                <div className="arrowContainer">
                  <span className="arrow w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );

  return (
    <div className="w-full bg-red-100">
      <div className="container mx-auto px-5 pb-10">
        <h1 className="text-center text-4xl font-bold text-gray-700 py-10">
          Helpful Resources
        </h1>
        <div>
          <MyCarousel />
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-y-0 md:gap-y-5">
            <div className="w-4/5 carouselItem shadow-2xl justify-self-center">
              <div className="w-full sm:h-48 h-40 bg-green-700 shadow-2xl" />
              <div className="w-full bg-white p-5">
                <p className="text-lg font-semibold mb-3">
                  Working From Home: Your Guide to Collaboration in Quip
                </p>
                <p className="text-md font-light">
                  Learn how to keep momentum and continue collaborating in new
                  ways.
                </p>
                <div className="flex text-blue-400 items-center py-3">
                  <div className="flex text-blue-400 learnBtn">
                    <p>Read</p>
                    <div className="arrowContainer">
                      <span className="arrow w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/5 shadow-2xl carouselItem justify-self-center">
              <div className="w-full sm:h-48 h-40 bg-yellow-700 shadow-2xl" />
              <div className="w-full bg-white p-5">
                <p className="text-lg font-semibold mb-3">
                  Saleforce's Best Practises for Remotes Work in Quip
                </p>
                <p className="text-md font-light">
                  Learn how to keep employees connected, build alignment, and
                  execute business objectives without the office.
                </p>
                <div className="flex text-blue-400 items-center py-3">
                  <div className="flex text-blue-400 learnBtn">
                    <p>Watch</p>
                    <div className="arrowContainer">
                      <span className="arrow w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/5 shadow-2xl carouselItem justify-self-center">
              <div className="w-full sm:h-48 h-40 bg-red-700 shadow-2xl" />
              <div className="w-full bg-white p-5">
                <p className="text-lg font-semibold mb-3">
                  Salesforce Care: Salesforce’s Response to COVID-19
                </p>
                <p className="text-md font-light">
                  Free rapid response solutions to help governments and
                  companies navigate COVID-19.
                </p>
                <div className="flex text-blue-400 items-center py-3">
                  <div className="flex text-blue-400 learnBtn">
                    <p>Learn More</p>
                    <div className="arrowContainer">
                      <span className="arrow w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/5 shadow-2xl carouselItem justify-self-center">
              <div className="w-full sm:h-48 h-40 bg-blue-700 shadow-2xl" />
              <div className="w-full bg-white p-5">
                <p className="text-lg font-semibold mb-3">
                  AppExchange COVID-19 Resource Center
                </p>
                <p className="text-md font-light">
                  A dedicated resource page with solutions and content to help
                  respond to the needs of your employees, customers, and
                  community during this time.
                </p>
                <div className="flex text-blue-400 items-center py-3">
                  <div className="flex text-blue-400 learnBtn">
                    <p>Learn More</p>
                    <div className="arrowContainer">
                      <span className="arrow w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
