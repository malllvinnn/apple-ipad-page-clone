import MainLayout from "../components/Layouts/MainLayout.jsx";
import Accessories from "../components/Modules/Accessories/index.jsx";
import Explore from "../components/Modules/Explore/index.jsx";
import Hero from "../components/Modules/Hero/index.jsx";
import KnowMore from "../components/Modules/KnowMore/index.jsx";
import More from "../components/Modules/More/index.jsx";
import Navbar from "../components/Modules/Navbar/index.jsx";
import Partner from "../components/Modules/Partner/index.jsx";

const Landing = () => {
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
    </>
  );
};

export default Landing;
