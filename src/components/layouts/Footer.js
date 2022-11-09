import FooterLogo from "../../assets/images/footer_logo.png";
import EmailIcon from "../../assets/icons/footer_email.svg";
import FacebookIcon from "../../assets/icons/footer_facebook.svg";
import TwitterIcon from "../../assets/icons/footer_twitter.svg";
import InstagramIcon from "../../assets/icons/footer_instagram.svg";
import { Col, Image, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="container">
        <Row as="footer" className="text-white py-5" style={{ rowGap: "1rem" }}>
          <Col xs={12} xl={6} className="mb-5 mb-xl-0">
            <a href="/">
              <Image src={FooterLogo} className="mb-3" />
            </a>
            <p className="me-5 pe-5">
              Warunk Online Kekinian, Menyediakan berbagai macam Makanan,
              Minuman dan Cemilan untuk dinikmati bersama Kawan dan Keluarga.
            </p>
            <p>Copyright © Warunk Horizontal - Kelompok TimTam</p>
            <a href="/" target={"_blank"}>
              <Image src={EmailIcon} className="me-3" />
            </a>
            <a href="/" target={"_blank"}>
              <Image src={FacebookIcon} className="me-3" />
            </a>
            <a href="/" target={"_blank"}>
              <Image src={TwitterIcon} className="me-3" />
            </a>
            <a
              href="https://www.instagram.com/warunkhorizontal.id/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={InstagramIcon} className="" />
            </a>
          </Col>
          <Col xs={6} md={4} xl={2}>
            <h5 className="mb-4">Konten Lain</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to={"/"} className="nav-link p-0 mb-3 text-white">
                  Beranda
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Nav.Link
                  href="#jelajahi-menu"
                  onClick={() => navigate("/menu")}
                  className="nav-link p-0 mb-3 text-white"
                >
                  Jelajahi Menu
                </Nav.Link>
              </li>
              <li className="nav-item mb-2">
                <Link to={"#"} className="nav-link p-0 text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4} xl={2}>
            <h5 className="mb-4">Tautan Lain</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to={"/tentang-kami"}
                  className="nav-link p-0 mb-3 text-white"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to={"/tentang-kami"}
                  className="nav-link p-0 mb-3 text-white"
                >
                  Pekerjaan Kita
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to={"#"} className="nav-link p-0 mb-3 text-white">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to={"#"} className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4} xl={2}>
            <h5 className="mb-4">Kontak</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#ikuti-kami" className="nav-link p-0 mb-3 text-white">
                  Ikuti Kami
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#media-sosial"
                  className="nav-link p-0 mb-3 text-white"
                >
                  Media Sosial
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#telp" className="nav-link p-0 mb-3 text-white">
                  021-123-456
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#email" className="nav-link p-0 text-white">
                  warunkhoriz@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
