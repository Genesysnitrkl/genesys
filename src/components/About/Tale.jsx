import React from "react";
import "./Tale.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Tale() {
  return (
    <div className="tale">
      <Container className="pt-5">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="header1 text-right grad-text"
        >
          About
        </h1>
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-left para" id="tale">
              Gensys, the Bioengineering Club of NIT Rourkela registered under
              SAC, was established with the motive to enable bioengineering
              students to explore more beyond academics and to link biology with
              technology for the benefit of the whole of Humanity. Genesys works
              as a multidisciplinary field club connecting biology with all
              other branches of engineering for the advancement in healthcare,
              and environment. Our vision is to spread knowlege in the field of
              bioengineering and connect globally as bioengineers and work to
              meet the needs and challenges of society.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
