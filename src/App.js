import React from "react";
import {
  MainPage,
  SectionMore,
  SectionCarousel,
  SectionSecure,
  SectionAbout,
} from "components/Components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <MainPage />
      <SectionMore />
      <SectionCarousel />
      <SectionSecure />
      <SectionAbout />
    </>
  );
};

export default App;
