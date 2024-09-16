import MainLayout from "../components/Layouts/MainLayout.jsx";
import Accessories from "../components/Modules/Accessories/index.jsx";
import Explore from "../components/Modules/Explore/index.jsx";
import Hero from "../components/Modules/Hero/index.jsx";
import KnowMore from "../components/Modules/KnowMore/index.jsx";
import Navbar from "../components/Modules/Navbar/index.jsx";

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <KnowMore />
        <Explore />
        <Accessories />
      </MainLayout>
    </>
  );
};

export default Landing;
