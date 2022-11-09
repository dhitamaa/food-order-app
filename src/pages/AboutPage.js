import { Container } from "react-bootstrap";
import AboutTeam from "../components/AboutTeam";
import AzisImg from "../assets/images/about_azis-img.jpg";
import AndhikaImg from "../assets/images/about_andhika-img.PNG";
import IrfanImg from "../assets/images/about_irfan-img.jpg";
import IlmiImg from "../assets/images/about_ilmi-img.jpg";
import FatichaImg from "../assets/images/about_faticha-img.jpg";
import "./style/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page mb-5">
      <div className="about-bg">
        <Container>
          <div className="intro">
            <h2>Tentang Kami</h2>
            <p>
              Kelompok TimTam, Sebuah Kelompok Programming Alakadarnya dari
              Kursus Front-End Web Kawah Edukasi Tugas Month #2 Kami adalah
              Ultramen Sejati berhati Baja untuk sebuah Kehidupan yang rumit ini
              dan Siap melawan Monster yang mematikan sekalipun. Cyattt... Ting
              Nung Ting Nung Ting Nung.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <h1 className="text-center title mt-5">Kelompok TimTam</h1>
        <div className="d-flex flex-wrap gap-5 py-4 justify-content-between">
          <AboutTeam
            src={IrfanImg}
            alt={"Irfan Hafizh"}
            name={"Irfan Hafizh"}
            exp={
              "Siswa Magang di PT. Mitra Infotek Totalsolusi sebagai Software Quality Assurance"
            }
          />
          <AboutTeam
            src={IlmiImg}
            alt={"Ilmi Nur Azis Aqli Mubarok"}
            name={"Ilmi Nur Azis Aqli Mubarok"}
            exp={
              "Tertarik untuk belajar dan mencoba hal-hal baru. Belum ada pengalaman kerja."
            }
          />
          <AboutTeam
            src={AndhikaImg}
            alt={"Andhika Pratama"}
            name={"Andhika Pratama"}
            exp={
              "Seorang lulusan jurusan kimia yang sama sekali tidak memiliki pengalaman dibidang programming."
            }
          />
          <AboutTeam
            src={AzisImg}
            alt={"Azis Maulana Malik"}
            name={"Azis Maulana Malik"}
            exp={
              "Lulusan Smk yang lebih banyak mempelajari programming secara autodidak."
            }
          />
          <AboutTeam
            className="m-auto"
            src={FatichaImg}
            alt={"Faticha Ayu Rafiditya"}
            name={"Faticha Ayu Rafiditya"}
            exp={
              "Bersekolah di jurusan TI ingin menambah dan mempelajari ilmu programming lagi."
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
