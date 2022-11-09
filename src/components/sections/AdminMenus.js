import { Image } from "react-bootstrap";
import AdminBreadcrumb from "../AdminBreadcrumb";
import "../style/AdminMenus.css";

const AdminMenus = () => {
  return (
    <div className="admin-menus">
      <AdminBreadcrumb name={"Daftar Menu"} />
      <p className="btn btn-primary mb-3">Tambah Menu</p>
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
                    Nama
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Kategori
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Harga
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Deskripsi
                  </p>
                </th>
                <th scope="col">
                  <p className="fw-semibold" style={{ fontSize: "1.15rem" }}>
                    Action
                  </p>
                </th>
              </tr>
              <tr className="align-middle">
                <td>1</td>
                <td>
                  <div className="d-flex align-items-center text-start">
                    <div className="">
                      <Image
                        src={
                          "https://img.okezone.com/content/2022/08/11/298/2646282/resep-nasi-goreng-rendah-kalori-cocok-untuk-diet-D8kxJ8GTcT.jpg"
                        }
                        alt={"Nasi Goreng"}
                        style={{ width: "8rem", borderRadius: "5px" }}
                      />
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{ width: "max-content", fontWeight: "600" }}
                      >
                        Nasi Goreng
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Populer, Makanan</p>
                </td>
                <td>
                  <p style={{ width: "max-content" }}>Rp. 10.000,-</p>
                </td>
                <td>
                  <p style={{ width: "18rem", fontSize: ".85rem" }}>
                    Nasi goreng adalah sebuah makanan berupa nasi yang digoreng
                    dan diaduk dalam minyak goreng, margarin, atau mentega.
                    Lihat Selengkapnya...
                  </p>
                </td>
                <td>
                  <div style={{ width: "max-content" }}>
                    <p className="btn btn-warning mx-2">Edit</p>
                    <p className="btn btn-danger text-white">Hapus</p>
                  </div>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminMenus;
