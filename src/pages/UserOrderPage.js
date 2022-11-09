import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import DetailOrder from "../components/DetailOrder";

const UserOrderPage = () => {
  const { orderItems } = useSelector((state) => state);

  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      {orderItems.length === 0 && (
        <h1 className="text-center">Kamu belum Memesan Menu Apapun!</h1>
      )}
      {orderItems.length >= 1 && <h2 className="mb-3">Pesanan Saya</h2>}
      {[...orderItems].reverse().map((item, index) => (
        <DetailOrder index={index} item={item} />
      ))}
    </Container>
  );
};

export default UserOrderPage;
