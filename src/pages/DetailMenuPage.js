import {
  Container,
  Row,
  Col,
  Card,
  Image as BsImage,
  Button,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import defaultImage from "../assets/images/menu_default_image.png";
import RightIcon from "../assets/icons/right.svg";
import menus from "../data";
import "./style/DetailMenuPage.css";

const DetailMenuPage = ({ props, handleAddProduct }) => {
  const { menuSlug } = useParams();
  const menu = menus.find((menu) => menu.slug === menuSlug);
  const { image, nama, kategori, deskripsi, harga } = menu;

  return (
    <div className="detail-menu-page py-5 mb-5">
      <Container>
        <p>
          <Link to={"/"}>
            <span className="text-muted">Beranda</span>
          </Link>
          <BsImage src={RightIcon} />
          <Link to={"/menu"}>
            <span className="text-muted">Menu</span>
          </Link>
          <BsImage src={RightIcon} />
          <span className="fw-semibold">{nama}</span>
        </p>
        <Card>
          <Row xs={1} lg={2} className="g-0">
            <Col>
              <Image
                as={BsImage}
                src={image}
                fallbackSrc={defaultImage}
                alt={nama}
                fluid={true}
                className="w-100"
              />
            </Col>
            <Col className="p-3 p-lg-4 p-xl-5">
              <h1 className="title mb-1">{nama}</h1>
              <p>
                <span className="fw-semibold">Kategori :</span>{" "}
                {kategori
                  .map((w) => w[0].toUpperCase() + w.slice(1))
                  .join(", ")}
              </p>
              <h4 className="subtitle">
                Rp. {harga.toLocaleString("id-ID")},-
              </h4>
              <p>{deskripsi}</p>
              <Button
                variant="primary"
                className="mt-3"
                onClick={() => handleAddProduct(menu)}
              >
                Tambah ke Pesanan
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default DetailMenuPage;
