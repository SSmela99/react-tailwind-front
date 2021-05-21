import React from "react";

import Nav from "./nav/Nav";
import MainSection from "./mainSection/MainSection";

const MainPage = () => {
  return (
    <main className="w-full mainBg">
      <div className="xl:container xl:mx-auto px-5 xl:px-0 ">
        <Nav />
        <MainSection />
      </div>
    </main>
  );
};

export default MainPage;
