import { Container, Col, Row, Button } from "react-bootstrap";
import "./EventPage.css";

import samplePhoto from "../../events-posters/poster-sample.png";

export default function BPSDP() {
  return (
    <div className="sponsors">
      <Container className="py-5">
        <br />
        <h1
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="text-silver">Gen-X-News</span>
        </h1>
        <Row>
          <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613587970/bghphlp8dz3qk35sndnh.jpg"
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613587106/yw5ofkpelj1ie1oepiev.jpg"
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613586521/axyjbqgs0cyobpkqfsnl.jpg"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
