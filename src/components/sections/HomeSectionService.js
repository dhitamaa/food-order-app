import { Container, Row, Col, Image } from "react-bootstrap";
import layanan1 from "../../assets/images/layanan_1.png";
import layanan2 from "../../assets/images/layanan_2.png";
import layanan3 from "../../assets/images/layanan_3.png";
import layanan4 from "../../assets/images/layanan_4.png";
import "../style/HomeSectionService.css";

const HomeSectionService = () => {
  return (
    <div className="service-section" id="layanan">
      <Container className="text-center">
        <h4 className="subtitle">Layanan</h4>
        <h1 className="title">
          Apa yang Kami Sajikan
          <br />
          Selain Makanan Lezat
        </h1>
        <p className="m-auto mb-5 service-paragraph">
          Program makanan dan minuman kami yang kreatif dan tinggi menggabungkan
          makanan pokok yang memuaskan dengan sentuhan imajinatif. Dari
          nongkrong hingga makan bareng keluarga, acara khusus, dan segala
          sesuatu di antaranya, Sebuah Originalitas memiliki sesuatu untuk semua
          orang.
        </p>
        <Row xs={2} md={4}>
          <Col>
            <div>
              <Image src={layanan1} fluid className="w-50" />
              <p className="service-subtitle">Pengiriman Cepat</p>
            </div>
          </Col>
          <Col>
            <div>
              <Image src={layanan2} fluid className="w-50" />
              <p className="service-subtitle">Mudah Dipesan</p>
            </div>
          </Col>
          <Col>
            <div>
              <Image src={layanan3} fluid className="w-50" />
              <p className="service-subtitle">Bahan yang Segar</p>
            </div>
          </Col>
          <Col>
            <div>
              <Image src={layanan4} fluid className="w-50" />
              <p className="service-subtitle">Harga Terjangkau</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSectionService;
