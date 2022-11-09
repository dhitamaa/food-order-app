import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderItems } from "../../bootstrap/actions";
import swal from "sweetalert";
import AdminBreadcrumb from "../AdminBreadcrumb";
import Description from "../Description";
import Button from "react-bootstrap/Button";
import ModalDetailOrder from "../ModalDetailOrder";
import "../style/AdminOrders.css";

const AdminOrders = () => {
  const { orderItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [reversed, setReversed] = useState(true);

  const removeOrderItemsReversed = (i) => {
    dispatch(
      setOrderItems(
        [...orderItems].reverse().filter((item, index) => index !== i)
      )
    );
    setReversed(!reversed);
    orderItems.map((item) =>
      swal({
        title: "Sukses Menghapus Pesanan!",
        text: "Pesanan " + item.user + " sudah dihapus",
        icon: "success",
        button: false,
        timer: 1750,
      })
    );
  };

  const removeOrderItems = (i) => {
    dispatch(setOrderItems(orderItems.filter((item, index) => index !== i)));
    setReversed(reversed);
    orderItems.map((item) =>
      swal({
        title: "Sukses Menghapus Pesanan!",
        text: "Pesanan " + item.user + " sudah dihapus",
        icon: "success",
        button: false,
        timer: 1750,
      })
    );
  };

  const [show, setShow] = useState("");
  const handleClose = () => setShow("");

  return (
    <div className="admin-orders">
      <AdminBreadcrumb name={"Daftar Pesanan"} />
      <div className="card bg-light-grey">
        <div className="card-body text-center py-0 px-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    No
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Pesanan
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Status
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Action
                  </p>
                </th>
              </tr>
              {orderItems.length === 0 && (
                <tr>
                  <td colSpan={4}>
                    <p>Belum ada Pesanan yang Masuk !</p>
                  </td>
                </tr>
              )}
              {reversed
                ? [...orderItems].reverse().map((item, index) => (
                    <tr key={index} className="align-middle">
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td style={{ width: "280px" }}>
                        <div className="d-flex align-items-center px-3 text-start">
                          <div className="" style={{ width: "20rem" }}>
                            <p
                              style={{ fontSize: "1.15rem", fontWeight: "600" }}
                            >
                              Pesanan : {item.user}
                            </p>
                            <p className="me-5">
                              <Description
                                key={index}
                                item={item}
                                color={"#888"}
                              />
                            </p>
                          </div>
                          <div style={{ width: "10rem" }}>
                            {item.dataPesananUser.pesananUser
                              .slice(0, 3)
                              .map((item, index) => (
                                <div key={index}>
                                  <p className="fw-semibold">
                                    {item.nama} x {item.quantity}
                                  </p>
                                </div>
                              ))}
                            {item.dataPesananUser.pesananUser.length > 3 && (
                              <p
                                style={{
                                  fontSize: ".85rem",
                                  color: "#888",
                                  cursor: "pointer",
                                  fontWeight: "500",
                                }}
                                onClick={() => setShow(index)}
                              >
                                Lihat Selengkapnya
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <p
                          className="mb-0 mx-auto"
                          style={
                            item.status === "Cooking" ||
                            item.status === "Deliver"
                              ? {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-accent)",
                                  borderRadius: "15px",
                                  color: "var(--clr-black)",
                                  fontWeight: "500",
                                }
                              : item.status === "Done"
                              ? {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-primary)",
                                  borderRadius: "15px",
                                  color: "var(--clr-white)",
                                  fontWeight: "500",
                                }
                              : {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-black)",
                                  borderRadius: "15px",
                                  color: "var(--clr-white)",
                                  fontWeight: "500",
                                }
                          }
                        >
                          {item.status}
                        </p>
                      </td>
                      <td>
                        <Button
                          key={index}
                          className="btn btn-primary text-white"
                          onClick={() => setShow(index)}
                        >
                          Detail
                        </Button>
                        <p className="btn btn-warning mx-2">Edit</p>
                        <p
                          className="btn btn-danger text-white"
                          onClick={() => removeOrderItemsReversed(index)}
                        >
                          Hapus
                        </p>
                      </td>
                      <ModalDetailOrder
                        show={show === index}
                        handleClose={handleClose}
                        item={item}
                        index={index}
                      />
                    </tr>
                  ))
                : orderItems.map((item, index) => (
                    <tr key={index} className="align-middle">
                      <td>
                        <p>{index + 1}</p>
                      </td>
                      <td style={{ width: "280px" }}>
                        <div className="d-flex align-items-center px-3 text-start">
                          <div className="" style={{ width: "20rem" }}>
                            <p
                              style={{ fontSize: "1.15rem", fontWeight: "600" }}
                            >
                              Pesanan : {item.user}
                            </p>
                            <p className="me-5">
                              <Description
                                key={index}
                                item={item}
                                color={"#888"}
                              />
                            </p>
                          </div>
                          <div style={{ width: "10rem" }}>
                            {item.dataPesananUser.pesananUser
                              .slice(0, 3)
                              .map((item, index) => (
                                <div key={index}>
                                  <p className="fw-semibold">
                                    {item.nama} x {item.quantity}
                                  </p>
                                </div>
                              ))}
                            {item.dataPesananUser.pesananUser.length > 3 && (
                              <p
                                style={{
                                  fontSize: ".85rem",
                                  color: "#888",
                                  cursor: "pointer",
                                  fontWeight: "500",
                                }}
                                onClick={() => setShow(index)}
                              >
                                Lihat Selengkapnya
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <p
                          className="mb-0 mx-auto"
                          style={
                            item.status === "Cooking" ||
                            item.status === "Deliver"
                              ? {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-accent)",
                                  borderRadius: "15px",
                                  color: "var(--clr-black)",
                                  fontWeight: "500",
                                }
                              : item.status === "Done"
                              ? {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-primary)",
                                  borderRadius: "15px",
                                  color: "var(--clr-white)",
                                  fontWeight: "500",
                                }
                              : {
                                  padding: ".2rem",
                                  backgroundColor: "var(--clr-black)",
                                  borderRadius: "15px",
                                  color: "var(--clr-white)",
                                  fontWeight: "500",
                                }
                          }
                        >
                          {item.status}
                        </p>
                      </td>
                      <td>
                        <Button
                          key={index}
                          className="btn btn-primary text-white"
                          onClick={() => setShow(index)}
                        >
                          Detail
                        </Button>
                        <p className="btn btn-warning mx-2">Edit</p>
                        <p
                          className="btn btn-danger text-white"
                          onClick={() => removeOrderItems(index)}
                        >
                          Hapus
                        </p>
                      </td>
                      <ModalDetailOrder
                        show={show === index}
                        handleClose={handleClose}
                        item={item}
                        index={index}
                      />
                    </tr>
                  ))}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
