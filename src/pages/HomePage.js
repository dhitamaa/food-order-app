import Hero from "../components/sections/HomeSectionHero";
import Spesial from "../components/sections/HomeSectionSpecial";
import Layanan from "../components/sections/HomeSectionService";
import Menu from "../components/sections/HomeSectionMenu";
import Testimoni from "../components/sections/HomeSectionTestimonial";
import Outlet from "../components/sections/HomeSectionOutlet";

const HomePage = ({ handleAddProduct }) => {
  return (
    <div className="home-page">
      <Hero />
      <Spesial />
      <Layanan />
      <Menu handleAddProduct={handleAddProduct} />
      <Testimoni />
      <Outlet />
    </div>
  );
};

export default HomePage;
