import { Link } from "react-router-dom";
import { Image, Nav } from "react-bootstrap";
import AdminLogo from "../../assets/images/footer_logo.png";
import HomepageIcon from "../../assets/icons/admin_homepage.svg";
import DashboardIcon from "../../assets/icons/admin_dashboard.svg";
import MenusIcon from "../../assets/icons/admin_menus.svg";
import OrdersIcon from "../../assets/icons/admin_orders.svg";
import LogoutIcon from "../../assets/icons/admin_logout.svg";
import ProfileImg from "../../assets/images/hero_profile-img.png";
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white"
        style={{ width: 280 }}
      >
        <a
          href="/admin"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <Image src={AdminLogo} />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="my-1">
            <Nav.Link as={Link} to="/" className="text-white">
              <Image src={HomepageIcon} className="me-2 mb-1" />
              Beranda
            </Nav.Link>
          </li>
          <li className="my-1">
            <Nav.Link as={Link} to="/admin" className="nav-link text-white">
              <Image src={DashboardIcon} className="me-2 mb-1" />
              Dashboard
            </Nav.Link>
          </li>
          <li className="my-1">
            <Nav.Link
              as={Link}
              to="/admin/daftar-menu"
              className="nav-link text-white"
            >
              <Image src={MenusIcon} className="me-2 mb-1" />
              Daftar Menu
            </Nav.Link>
          </li>
          <li className="my-1">
            <Nav.Link
              as={Link}
              to="/admin/daftar-pesanan"
              className="nav-link text-white"
            >
              <Image src={OrdersIcon} className="me-2 mb-1" />
              Daftar Pesanan
            </Nav.Link>
          </li>
        </ul>
        <hr />
        <div className="d-flex align-items-center justify-content-between text-white text-decoration-none px-3">
          <div>
            <Image
              src={ProfileImg}
              className="rounded-circle me-2"
              style={{ width: "32px", height: "32px" }}
            />
            <strong>Irfan Hafizh</strong>
          </div>
          <div>
            <Image src={LogoutIcon} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
