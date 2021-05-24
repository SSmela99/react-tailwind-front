import React from "react";

import Nav from "./nav/Nav";
import MainSection from "./mainSection/MainSection";
import Banner from "../banner/Banner";

const MainPage = () => {
  return (
    <>
      <main className="w-full mainBg">
        <div className="xl:container xl:mx-auto px-5 xl:px-0 ">
          <Nav />
          <MainSection />
        </div>
      </main>
      <Banner />
    </>
  );
};

export default MainPage;
