import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import GoToTop from "../GoToTop";

const Pages = () => {
  const getUserLogged = localStorage.getItem("userLogged");

  if (!getUserLogged) return <Navigate to="/login" />;

  return (
    <>
      <Header />
      <Outlet />
      <GoToTop />
      <Footer />
    </>
  );
};

export default Pages;
