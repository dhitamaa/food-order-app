import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UserOrderCartPage = ({
  handleAddQtyProduct,
  handleRemoveProduct,
  handleCartClearance,
  newOrder,
}) => {
  const { cartItems } = useSelector((state) => state);
  const totalHarga = cartItems.reduce(
    (harga, item) => harga + item.quantity * item.harga,
    0
  );

  const navigate = useNavigate();
  const getUsername = localStorage.getItem("usernameData");

  const [keterangan, setKeterangan] = useState("");
  const [dateTime, setDateTime] = useState("");

  var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var tanggal = new Date().getDate();
  var xhari = new Date().getDay();
  var xbulan = new Date().getMonth();
  var xtahun = new Date().getYear();
  var day = hari[xhari];
  var month = bulan[xbulan];
  var tahun = xtahun < 1000 ? xtahun + 1900 : xtahun;
  const displayDate = day + ", " + tanggal + " " + month + " " + tahun;

  const showDate = new Date();
  const displayTime =
    (showDate.getHours() < 10 ? "0" : "") +
    showDate.getHours() +
    ":" +
    (showDate.getMinutes() < 10 ? "0" : "") +
    showDate.getMinutes() +
    ":" +
    (showDate.getSeconds() < 10 ? "0" : "") +
    showDate.getSeconds();
  const [data, setData] = useState({
    pesananUser: [],
    keterangan: "",
    totalHargaPesanan: 0,
  });

  const handleAddOrder = () => {
    setData(() => {
      return {
        pesananUser: cartItems,
        keterangan: keterangan || "-",
        totalHargaPesanan: totalHarga,
      };
    });
    setDateTime(displayDate + " - " + displayTime);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    newOrder(data, dateTime);
    handleCartClearance();
    swal({
      title: "Mantap! Sudah diPesan",
      text: "Mohon ditunggu Untuk Pesanannya",
      icon: "success",
      button: false,
      timer: 1750,
    });
    setTimeout(() => {
      navigate("/" + getUsername + "/pesanan-saya");
    }, 2000);
  };

  return (
    <Container className="my-5 order-cart-page">
      <form onSubmit={handleSubmit}>
        {cartItems.length === 0 && (
          <h1 className="text-center">Keranjang Pesanan kamu Kosong!</h1>
        )}
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column" style={{ width: "45rem" }}>
            {cartItems.length >= 1 && (
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Keranjang Pesanan Saya</h2>
                <button
                  className="btn btn-primary"
                  onClick={handleCartClearance}
                >
                  Hapus Semua
                </button>
              </div>
            )}
            {[...cartItems].reverse().map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center mt-4"
                style={{
                  padding: ".75rem",
                  borderRadius: "25px",
                  border: "1px solid rgba(0,0,0,0.25)",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.nama}
                  style={{ width: "15rem", borderRadius: "25px" }}
                />
                <div className="ms-4">
                  <h1 className="subtitle">{item.nama}</h1>
                  {item.quantity} x Rp. {item.harga.toLocaleString("id-ID")},-
                </div>
                <div className="ms-auto me-3">
                  <button
                    className="me-3 btn btn-primary p-0 py-1 px-2"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                    type="button"
                    onClick={() => handleAddQtyProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger p-0 py-1 px-2"
                    style={{ fontSize: "1.25rem", fontWeight: "600" }}
                    type="button"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length >= 1 && (
            <div
              className="d-flex flex-column position-sticky"
              style={{
                top: "140px",
                right: "105px",
                width: "20rem",
                height: "fit-content",
                flexShrink: 0,
                padding: "1rem",
                borderRadius: "15px",
                border: "1px solid rgba(0,0,0,0.25)",
              }}
            >
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={6}
                defaultValue={keterangan}
                placeholder="Masukan Keterangan"
                onChange={(e) => {
                  setKeterangan(e.target.value || "");
                }}
              />
              <p className="mt-3 subtitle" style={{ fontSize: "1.15rem" }}>
                Total Harga : Rp. {totalHarga.toLocaleString("id-ID")},-
              </p>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleAddOrder}
              >
                Pesan Sekarang
              </button>
            </div>
          )}
        </div>
      </form>
    </Container>
  );
};

export default UserOrderCartPage;
