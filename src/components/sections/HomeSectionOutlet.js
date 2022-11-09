import { Image, Button, Row, Col, Card } from "react-bootstrap";
import OutletPeta from "../../assets/images/outlet_peta.png";
import OutletImg from "../../assets/images/outlet_img.png";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import MapArrowIcon from "../../assets/icons/outlet_maps-arrow.svg";
import StarIcon from "../../assets/icons/outlet_star.svg";
import "../style/HomeSectionOutlet.css";

const HomeSectionOutlet = () => {
  return (
    <div className="outlet-section">
      <Row className="m-0">
        <Col className="bg-wrapper-outlet">
          <div className="d-flex flex-column justify-content-center h-100 p-3 mx-4">
            <h4 className="subtitle">Outlet</h4>
            <h1 className="title">Kami juga Memiliki Outlet</h1>
            <p className="me-3">
              Warunk nomor #1 yang Anda cari untuk memuaskan rasa lapar Anda
              atau hanya ingin mencicipi hal-hal yang lezat bersama kawan.
            </p>
            <a
              href="https://g.co/kgs/2UM9Lc"
              target={"_blank"}
              rel="noreferrer"
            >
              <Button variant="primary" className="btn-jelajahi-outlet mt-3">
                Jelajahi Outlet <Image src={ArrowRightIcon} />{" "}
              </Button>
            </a>
          </div>
        </Col>
        <Col className="map">
          <div className="position-relative">
            <Image src={OutletPeta} />
            <div
              className="position-absolute outlet-card"
              style={{ right: "81px", bottom: "60px" }}
            >
              <a
                href="https://g.co/kgs/2UM9Lc"
                target={"_blank"}
                rel="noreferrer"
              >
                <Card>
                  <div className="d-flex">
                    <div>
                      <Image src={OutletImg} className="p-3" />
                    </div>
                    <div className="d-flex flex-column justify-content-center py-3 me-3">
                      <h4>
                        Warunk Horizontal, <br /> Perum Perak
                      </h4>
                      <div>
                        <Image src={StarIcon} />
                        <Image src={StarIcon} />
                        <Image src={StarIcon} />
                        <Image src={StarIcon} />
                        <Image src={StarIcon} />
                      </div>
                    </div>
                    <div>
                      <Image src={MapArrowIcon} className="pt-3 me-3" />
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HomeSectionOutlet;
