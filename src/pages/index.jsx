import MainLayout from "../components/Layouts/MainLayout.jsx";
import Hero from "../components/Modules/Hero/index.jsx";
import Navbar from "../components/Modules/Navbar/index.jsx";

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  );
};

export default Landing;
