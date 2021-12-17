import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ready.css";

export default function Ready() {
  return (
    <div className="ready">
      <Container>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="header text-left pt-5 grad-text"
        >
          Journey So Far
        </h1>
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="py-5 text-left"
          >
            <h3 className="text-left para" id="ready">
              Beginning in the year 2015 with few undergraduates from the branch
              of biotechnology and medical engineering, the club currently has
              enthusiasts from the field of metallurgy, life-science, chemistry,
              ceramic engineering, computer science to accoplish the vision and
              mission of the club. The constant efforts of the club members
              together with their passion and determination is incessantly
              leading towards the success of the club.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
