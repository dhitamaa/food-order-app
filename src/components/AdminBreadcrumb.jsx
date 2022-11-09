import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import RightIcon from "../assets/icons/right.svg";

const AdminBreadcrumb = ({ name }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h1 className="mb-0">{name}</h1>
      <p className="mb-0">
        <Link to={"/"}>
          <span className="text-muted">Beranda</span>
        </Link>
        <Image src={RightIcon} className="mx-1" />
        <Link to={"/admin"}>
          <span className="text-muted">Admin</span>
        </Link>
        <Image src={RightIcon} className="mx-1" />
        <span className="fw-semibold">{name}</span>
      </p>
    </div>
  );
};

export default AdminBreadcrumb;
