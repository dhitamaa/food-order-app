import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import add from "../assets/icons/menu_add.svg";
import "./style/HomeSectionMenu.css";

const HomeCardMenu = (props) => {
  return (
    <div className="home-card-menu">
      <Card className="p-3">
        <div className="d-flex align-items-center">
          <Link to={`/menu/${props.link}`}>
            <div>
              <Image style={{ width: "8rem" }} src={props.src} />
            </div>
          </Link>
          <div className="mx-3">
            <h4 className="subtitle">{props.name}</h4>
            <p>Rp. {props.price},-</p>
          </div>
          <div className="mt-auto ms-auto">
            <div
              className="btn-add"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.handleAddProduct(props.menu);
              }}
            >
              <Image src={add} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeCardMenu;
