import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/Home";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Footer";
import { Contact } from "./components/contact";
import {Footer} from "./components/Footer"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Home data={landingPageData.Header} />
      <Footer data={landingPageData.Footer} />
      {/* <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
