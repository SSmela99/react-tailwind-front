import React from "react";
import {
  MainPage,
  SectionMore,
  SectionCarousel,
  SectionSecure,
  SectionAbout,
  Companies,
  SectionQuote,
  Footer,
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
      <Companies />
      <SectionQuote />
      <Footer />
    </>
  );
};

export default App;
