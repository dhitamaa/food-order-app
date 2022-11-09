import { Col, Container, Image, Row } from "react-bootstrap";
import testi1 from "../../assets/images/testimoni_1.png";
import testi2 from "../../assets/images/testimoni_2.png";
import testi3 from "../../assets/images/testimoni_3.png";
import testi4 from "../../assets/images/testimoni_4.png";
import "../style/HomeSectionTestimonial.css";

const Testimoni = () => {
  return (
    <div className="testimonial-section" id="testimoni">
      <Container>
        <div className="text-center testimoni">
          <h4 className="subtitle">Testimoni</h4>
          <h1 className="text-center title">
            Mari kita Dengarkan beberapa <br /> Kepuasan dari Pelanggan
          </h1>
          <p className="mt-4 sub">
            Warunk no #1 yang anda cari untuk memuaskan rasa lapar atau <br />
            hanya ingin mencicipi hal-hal yang kuat bersama kawan
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-between pt-5">
          <div className="card-testi py-3">
            <Row className="d-flex align-items-center">
              <Image
                className="card-img"
                style={{ width: "30%", height: "30%" }}
                src={testi1}
              />
              <Col>
                <h3 className="name">Andhika Pratama</h3>
                <p>Food Vloger</p>
                <p className="keterangan">
                  Makanan yang luar biasa dan layanan nya benar-benar
                  profesional. Nasi goreng dengan bumbu matcha nya enak banget.
                </p>
              </Col>
            </Row>
          </div>
          <div className="card-testi py-3">
            <Row className="d-flex align-items-center">
              <Image
                className="card-img"
                style={{ width: "30%", height: "30%" }}
                src={testi2}
              />
              <Col>
                <h3 className="name">Azis Maulana M.</h3>
                <p>Anak Tongkrongan</p>
                <p className="keterangan">
                  Makanan, minuman cemilan dan fasilitas disini lengkap,
                  Terimakasih sudah membuat tongkrongan kami bisa betah di
                  warunk ini...
                </p>
              </Col>
            </Row>
          </div>
          <div className="card-testi py-3">
            <Row className="d-flex align-items-center">
              <Image
                className="card-img"
                style={{ width: "30%", height: "30%" }}
                src={testi3}
              />
              <Col>
                <h3 className="name">Faticha Ayu Raf.</h3>
                <p>Mukbangers</p>
                <p className="keterangan">
                  Sangat menikmati seluruh makanan dari awal sampai akhir, saya
                  memesan 5 menu, semuanya sangat enak dan cocok buat saya anak
                  mukbang hehe...
                </p>
              </Col>
            </Row>
          </div>
          <div className="card-testi py-3">
            <Row className="d-flex align-items-center">
              <Image
                className="card-img"
                style={{ width: "30%", height: "30%" }}
                src={testi4}
              />
              <Col>
                <h3 className="name">Ilmi N. Mubarok</h3>
                <p>Pecinta Makanan</p>
                <p className="keterangan">
                  Kualitas makanan yang sangat baik. Porsinya cukup banyak ga
                  sedikit, Semuanya luar biasa. Harga terjangkau untuk di
                  Bekasi. Tidak ada keluhan.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimoni;
