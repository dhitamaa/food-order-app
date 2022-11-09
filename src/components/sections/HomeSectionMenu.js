import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import produce from "immer";
import { useRef, useEffect, useState } from "react";
import ButtonCategory from "../ButtonMenu";
import HomeCardMenu from "../HomeCardMenu";
import HeroMenu from "../../assets/images/menu_img.png";
import HeroNasiGoreng from "../../assets/images/menu_img_nasi-goreng.png";
import menus from "../../data";
import nasgor from "../../assets/images/menu_nasi-goreng.png";
import mie from "../../assets/images/menu_mie-goreng.png";
import kwetiaw from "../../assets/images/menu_kwetiaw-goreng.png";
import kentang from "../../assets/images/menu_kentang-goreng.png";
import seblak from "../../assets/images/menu_seblak.png";
import takoyaki from "../../assets/images/menu_takoyaki.png";
import thai from "../../assets/images/menu_thai-tea.png";
import kopi from "../../assets/images/menu_kopi-kanan.png";
import pop from "../../assets/images/menu_pop-ice.png";
import esteh from "../../assets/images/menu_es-teh.png";
import MenuSelect from "../MenuSelect";
import "../style/HomeSectionMenu.css";

const categoryList = ["Semua", "Populer", "Makanan", "Minuman", "Cemilan"];

const images = [
  nasgor,
  mie,
  kwetiaw,
  kentang,
  seblak,
  takoyaki,
  thai,
  kopi,
  pop,
  esteh,
];

const Menu = ({ handleAddProduct }) => {
  const [state, setState] = useState({
    isMobile: true,
    selectedCategory: "semua",
    width: 0,
  });
  const carouselMenu = useRef();

  const toggleIsMobile = () => {
    if (window.innerWidth >= 768)
      setState(
        produce((draft) => {
          draft.isMobile = false;
        })
      );
    else
      setState(
        produce((draft) => {
          draft.isMobile = true;
        })
      );
  };

  const handleSelectChange = (e) => {
    setState(
      produce((draft) => {
        draft.selectedCategory = e.target.value;
      })
    );
  };

  const handleButtonCategoryClick = (e) => {
    setState(
      produce((draft) => {
        draft.selectedCategory = e.target.id;
      })
    );
  };

  useEffect(() => {
    toggleIsMobile();
    window.addEventListener("resize", toggleIsMobile);
    setState(
      produce((draft) => {
        draft.width = carouselMenu.current.setWidth =
          1719 - carouselMenu.current.offsetWidth;
      })
    );
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("resize", toggleIsMobile);
  }, []);

  return (
    <div className="menu-section" id="pesan-menu">
      <Container ref={carouselMenu}>
        <h4 className="text-center subtitle">Menu</h4>
        <h1 className="text-center title">
          Apa yang Kamu Idamkan <br /> dalam Menu ini?
        </h1>

        <Row
          xs="auto"
          className="justify-content-center align-items-center g-0 gap-2 gap-lg-4"
          style={{ rowGap: "0.5rem" }}
        >
          {state.isMobile ? (
            <Col>
              <MenuSelect
                selectedCategory={state.selectedCategory}
                onSelectChange={handleSelectChange}
              />
            </Col>
          ) : (
            categoryList.map((category, index) => (
              <Col key={index}>
                <ButtonCategory
                  selectedCategory={state.selectedCategory}
                  label={category}
                  onButtonCategoryClick={handleButtonCategoryClick}
                />
              </Col>
            ))
          )}
        </Row>

        <motion.div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -state.width }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            whileTap={{ cursor: "grabbing" }}
            className="d-flex mt-4 menu"
            style={{ cursor: "grab" }}
          >
            <motion.div
              className="position-relative m-auto"
              style={{ pointerEvents: "none" }}
            >
              <Image style={{ width: "20rem" }} src={HeroMenu} />
              <motion.div
                className="position-absolute"
                style={{ right: "-40px", bottom: "75px" }}
              >
                <Image style={{ width: "25rem" }} src={HeroNasiGoreng} />
              </motion.div>
            </motion.div>
            <motion.div className="pilih-menu d-flex px-3">
              {menus.map((menu, index) => {
                if (state.selectedCategory === "semua") {
                  return (
                    <HomeCardMenu
                      key={index}
                      link={menu.slug}
                      src={images[index]}
                      name={menu.nama}
                      price={menu.harga.toLocaleString("id-ID")}
                      menu={menu}
                      handleAddProduct={handleAddProduct}
                    />
                  );
                }
                if (menu.kategori.includes(state.selectedCategory)) {
                  return (
                    <HomeCardMenu
                      key={index}
                      link={menu.slug}
                      src={images[index]}
                      name={menu.nama}
                      price={menu.harga.toLocaleString("id-ID")}
                      menu={menu}
                      handleAddProduct={handleAddProduct}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Menu;
