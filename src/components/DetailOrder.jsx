import Description from "./Description";
import MenuOrderLess from "./MenuOrderLess";

const DetailOrder = ({ item, index }) => {
  return (
    <>
      <div
        key={index}
        className="d-flex justify-content-between align-items-center p-4 mb-4"
        style={{
          width: "43rem",
          padding: ".75rem",
          borderRadius: "25px",
          border: "1px solid rgba(0,0,0,0.25)",
        }}
      >
        <div>
          <p style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            Pesanan : {item.user}
          </p>
          <MenuOrderLess key={index} item={item} />
        </div>
        <div style={{ width: "17rem" }}>
          <p style={{ fontSize: ".85rem", fontWeight: "600" }}>
            {item.dateTime}
          </p>
          <p>
            <span style={{ fontSize: "1.15rem", fontWeight: "600" }}>
              Status
            </span>{" "}
            :{" "}
            <span
              className="ms-2"
              style={
                item.status === "Cooking" || item.status === "Deliver"
                  ? {
                      padding: ".15rem .75rem",
                      backgroundColor: "var(--clr-accent)",
                      borderRadius: "15px",
                      color: "var(--clr-black)",
                      fontWeight: "500",
                    }
                  : item.status === "Done"
                  ? {
                      padding: ".15rem .75rem",
                      backgroundColor: "var(--clr-primary)",
                      borderRadius: "15px",
                      color: "var(--clr-white)",
                      fontWeight: "500",
                    }
                  : {
                      padding: ".15rem .75rem",
                      backgroundColor: "var(--clr-black)",
                      borderRadius: "15px",
                      color: "var(--clr-white)",
                      fontWeight: "500",
                    }
              }
            >
              {item.status}
            </span>
          </p>
          <p>
            <Description key={index} item={item} color={"#333"} />
          </p>
          <p style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            Total Harga : Rp.
            {item.dataPesananUser.totalHargaPesanan.toLocaleString("id-ID")}
            ,-
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
