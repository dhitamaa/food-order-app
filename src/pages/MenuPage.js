import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAddMenu } from "../hooks/useAddMenu";
import ButtonCategory from "../components/ButtonMenu";
import AddMenuButton from "../components/AddMenuButton";
import MenuModal from "../components/MenuModal";
import Menu from "../components/Menu";
import MenuSelect from "../components/MenuSelect";
import BannerImg from "../assets/images/menu_banner-img.png";
import menus from "../data";
import produce from "immer";
import "./style/MenuPage.css";

const categoryList = ["Semua", "Populer", "Makanan", "Minuman", "Cemilan"];

const MenuPage = ({ handleAddProduct }) => {
  const addMenu = useAddMenu();
  const [state, setState] = useState({
    isMobile: true,
    selectedCategory: "semua",
    showModal: false,
  });

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

  const handleModalToggle = () => {
    setState(
      produce((draft) => {
        draft.showModal = !draft.showModal;
      })
    );
  };

  useEffect(() => {
    toggleIsMobile();
    window.addEventListener("resize", toggleIsMobile);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("resize", toggleIsMobile);
  }, []);

  return (
    <div className="menu-page mb-5">
      <Container>
        <div className="mt-4 text-center">
          <a href="#jelajahi-menu">
            <Image src={BannerImg} fluid />
          </a>
        </div>
        <div id="jelajahi-menu" className="mt-5">
          <Row
            xs="auto"
            className="justify-content-between justify-content-md-center align-items-center g-0 gap-2 gap-lg-4"
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
            <Col>
              <AddMenuButton
                label="Tambah Menu"
                onModalToggle={handleModalToggle}
              />
            </Col>
          </Row>
          <Row sm={2} lg={3} xl={4} xxl={5} className="py-5 menu-row">
            {menus.map((menu, index) => {
              if (state.selectedCategory === "semua") {
                return (
                  <Menu
                    key={index}
                    menu={menu}
                    handleAddProduct={handleAddProduct}
                  />
                );
              }
              if (menu.kategori.includes(state.selectedCategory)) {
                return (
                  <Menu
                    key={index}
                    menu={menu}
                    handleAddProduct={handleAddProduct}
                  />
                );
              } else {
                return null;
              }
            })}
          </Row>
        </div>
      </Container>
      <MenuModal
        action="ADD_MENU"
        categories={categoryList}
        showModal={state.showModal}
        onModalToggle={handleModalToggle}
        onFormSubmit={addMenu}
      />
    </div>
  );
};

export default MenuPage;
