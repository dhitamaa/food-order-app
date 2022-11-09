import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCardMenu = (props) => {
  return (
    <div className="hero-card-menu">
      <Card>
        <Link to={props.link}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.nama}</Card.Title>
          <Card.Text>Rp. {props.harga},-</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroCardMenu;
