import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./Members.css";

import photo1 from "../../speakers-photos/Arkodyuti.jpg";
import photo2 from "../../speakers-photos/ashish.png";
import photo3 from "../../speakers-photos/Logan Kilpatrick.jpg";

export default function Members() {
  return (
    <div className="speakers" id="speakers">
      <Container className="py-5">
        <br></br>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="speak-text text-left grad-text"
        >
          Members
        </h1>
        <Row className="my-5">
          <Col>
            <img class="speak-logos" src={photo1} />
            <h2>Arkodyuti Saha</h2>
            <h5>tagline</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo2} />
            <h2>Aashish Barnwal</h2>
            <h5>SDE II at Amazon Vancouver, Canada</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo3} />
            <h2>Logan Kilpatrick</h2>
            <h5>Applied Machine Learning Engineer at Apple US</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
