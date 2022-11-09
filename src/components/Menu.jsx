import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "./Image";
import defaultImage from "../assets/images/menu_default_image.png";

const Menu = ({ menu, handleAddProduct }) => {
  return (
    <Col className="d-flex flex-column">
      <Card className="h-100 menu">
        <Link to={menu.slug} className="h-100">
          <Image
            as={Card.Img}
            variant="top"
            src={menu.image}
            fallbackSrc={defaultImage}
          />
        </Link>
        <Card.Body>
          <Row className="h-100 g-0 flex-column justify-content-between">
            <Col className="mb-3">
              <Card.Title className="title">{menu.nama}</Card.Title>
              <Card.Text className="price">
                Rp. {menu.harga.toLocaleString("id-ID")},-
              </Card.Text>
            </Col>
            <Button
              variant="primary"
              className="w-100 btn-add-menu"
              onClick={() => handleAddProduct(menu)}
            >
              Tambah
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menu;
