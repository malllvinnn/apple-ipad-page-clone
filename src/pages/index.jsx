import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MainLayout from "../components/Layouts/MainLayout.jsx";
import Accessories from "../components/Modules/Accessories/index.jsx";
import Explore from "../components/Modules/Explore/index.jsx";
import Footer from "../components/Modules/Footer/index.jsx";
import Hero from "../components/Modules/Hero/index.jsx";
import KnowMore from "../components/Modules/KnowMore/index.jsx";
import More from "../components/Modules/More/index.jsx";
import Navbar from "../components/Modules/Navbar/index.jsx";
import Partner from "../components/Modules/Partner/index.jsx";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <KnowMore />
        <Explore />
        <Accessories />
        <Partner />
        <More />
      </MainLayout>
      <Footer />
    </>
  );
};

export default Landing;
