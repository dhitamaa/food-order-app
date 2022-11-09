import { Card } from "react-bootstrap";

const AboutTeam = (props) => {
  return (
    <div className="about-team m-auto">
      <div className="d-flex card">
        <Card>
          <div className="about-img">
            <img src={props.src} alt={props.alt} />
          </div>
          <div className="about-intro">
            <h5>{props.name}</h5>
            <p>{props.exp}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutTeam;
