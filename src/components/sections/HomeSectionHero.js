import { Container, Image, Col, Row, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroImg from "../../assets/images/hero_img.png";
import HeroPlayBtn from "../../assets/icons/hero_play-btn.svg";
import HeroProfileImg from "../../assets/images/hero_profile-img.png";
import HeroCardMenu from "../HeroCardMenu";
import MieGoreng from "../../assets/images/hero_mie-goreng.png";
import NasiGoreng from "../../assets/images/hero_nasi-goreng.png";
import Kentang from "../../assets/images/hero_kentang-goreng.png";
import Kopi from "../../assets/images/hero_kopi-kanan.png";
import ThaiTea from "../../assets/images/hero_thai-tea.png";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import "../style/HomeSectionHero.css";

const HomeSectionHero = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <h1 className="title m-0">
                warunk <span>horizontal</span>
              </h1>
              <hr />
              <p>
                Warunk Online Kekinian, Menyediakan berbagai macam Makanan,
                Minuman dan Cemilan untuk Dinikmati bersama Kawan maupun
                Keluarga.
              </p>
              <div className="d-flex">
                <Nav.Link
                  href="#pesan-menu"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <Button variant="primary" className="btn-hero me-5">
                    Pesan <Image src={ArrowRight} />
                  </Button>
                </Nav.Link>
                <Link to={"/"}>
                  <div className="d-flex align-items-center wrapper-btn-hero_play">
                    <div className="d-flex align-items-center justify-content-center btn-hero_play me-2">
                      <Image src={HeroPlayBtn} />
                    </div>
                    Cara Memesan
                  </div>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center mt-5">
              <div>
                <h2 className="subtitle m-0">Kelompok TimTam</h2>
                <p className="fw-semibold m-0" style={{ fontSize: "1.125rem" }}>
                  Pemilik
                </p>
                <p className="mt-3 me-3">
                  Restoran ini mengambil konsep bidang garis datar yang dimana
                  tidak ada filosofinya sih cuman nama saja xixi.
                </p>
              </div>
              <div>
                <Image src={HeroProfileImg} />
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <motion.div className="position-relative overflow-hidden">
              <Image src={HeroImg} className="hero-img" />
              <motion.div
                ref={carousel}
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                whileTap={{ cursor: "grabbing" }}
                className="position-absolute d-flex px-3 menu-hero"
                style={{
                  bottom: "115px",
                }}
              >
                <HeroCardMenu
                  link={"/menu/nasi-goreng"}
                  image={NasiGoreng}
                  nama="Nasi Goreng"
                  harga="15.000"
                />
                <HeroCardMenu
                  link={"/menu/mie-goreng"}
                  image={MieGoreng}
                  nama="Mie Goreng"
                  harga="10.000"
                />
                <HeroCardMenu
                  link={"/menu/kentang-goreng"}
                  image={Kentang}
                  nama="Kentang"
                  harga="10.000"
                />
                <HeroCardMenu
                  link={"/menu/kopi-kanan"}
                  image={Kopi}
                  nama="Kopi Kanan"
                  harga="7.000"
                />
                <HeroCardMenu
                  link={"/menu/thai-tea"}
                  image={ThaiTea}
                  nama="Thai Tea"
                  harga="8.000"
                />
              </motion.div>
              <div
                className="position-absolute"
                style={{
                  bottom: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Nav.Link
                  className="btn-jelajahi-menu btn btn-primary"
                  href="#jelajahi-menu"
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  Jelajahi Menu
                </Nav.Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSectionHero;
