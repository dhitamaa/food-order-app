import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderLogo from "../../assets/images/header_logo.png";
import SearchIcon from "../../assets/icons/header_search.svg";
import BagIcon from "../../assets/icons/header_shopping-bag.svg";
import UserIcon from "../../assets/icons/header_user.svg";
import "../style/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state);
  const getUsername = localStorage.getItem("usernameData");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="header bg-white">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={HeaderLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ms-auto">
              <Nav.Link as={Link} to="/" className="me-2">
                Beranda
              </Nav.Link>
              <Nav.Link as={Link} to="/tentang-kami" className="me-2">
                Tentang Kami
              </Nav.Link>
              <Nav.Link
                className="me-2"
                href="#layanan"
                onClick={() => navigate("/")}
              >
                Layanan
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className="me-2">
                Menu
              </Nav.Link>
              <Nav.Link
                className="me-4"
                href="#testimoni"
                onClick={() => navigate("/")}
              >
                Testimoni
              </Nav.Link>
              <Stack
                direction="horizontal"
                gap={4}
                className="justify-content-center"
              >
                <Image src={SearchIcon} fluid />
                <li className="nav-item dropdown">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    as={Link}
                    to={getUsername + "/keranjang-saya"}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image src={BagIcon} fluid />
                    <span>
                      {cartItems?.length === 0 ? "" : cartItems?.length}
                    </span>
                  </Nav.Link>
                  <ul
                    className={
                      cartItems?.length >= 1
                        ? "dropdown-menu py-0 pb-2"
                        : "dropdown-menu py-0"
                    }
                    aria-labelledby="navbarDropdown"
                    style={
                      cartItems?.length >= 4
                        ? {
                            height: "20rem",
                            overflowY: "scroll",
                          }
                        : {
                            height: "fit-content",
                          }
                    }
                  >
                    {cartItems?.length === 0 && (
                      <>
                        <p className="dropdown-item mb-0 mt-2">
                          Keranjang kamu Kosong!
                        </p>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </>
                    )}
                    <div
                      className="position-sticky bg-white"
                      style={{ top: 0, left: 0, borderRadius: "15px" }}
                    >
                      <li className={cartItems?.length === 0 ? "mb-2" : "pt-2"}>
                        <Dropdown.Item
                          as={Link}
                          to={getUsername + "/keranjang-saya"}
                          className="btn-item"
                        >
                          Lihat Selengkapnya
                        </Dropdown.Item>
                      </li>
                      {cartItems?.length >= 1 && (
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      )}
                    </div>
                    {[...cartItems].reverse().map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center dropdown-item mb-0"
                      >
                        <div>
                          <Image
                            src={item.image}
                            alt={item.nama}
                            style={{
                              width: "5rem",
                              borderRadius: "5px",
                              cursor: "default",
                            }}
                          />
                        </div>
                        <div className="ms-2">
                          <p className="mb-0" style={{ fontWeight: "600" }}>
                            {item.nama}
                          </p>
                          <p className="mb-0">
                            {item.quantity} x Rp.{" "}
                            {item.harga.toLocaleString("id-ID")},-
                          </p>
                        </div>
                      </div>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <p
                    className="nav-link dropdown-toggle mb-0"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image src={UserIcon} fluid />
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <p className="dropdown-item mb-0">
                      Hello, {localStorage.getItem("usernameData")}
                    </p>
                    <Dropdown.Item
                      as={Link}
                      to={getUsername + "/pesanan-saya"}
                      className="btn-item"
                    >
                      Pesanan Saya
                    </Dropdown.Item>
                    {getUsername === "admin" && (
                      <Dropdown.Item
                        as={Link}
                        to={getUsername}
                        className="btn-item"
                      >
                        Admin Dashboard
                      </Dropdown.Item>
                    )}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Dropdown.Item
                        href="/login"
                        className="btn-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </Dropdown.Item>
                    </li>
                  </ul>
                </li>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
