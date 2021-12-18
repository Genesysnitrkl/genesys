import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import photo1 from "../../member-photos/shourat-fatma.jpg";
import photo2 from "../../member-photos/Sneha-Swain.jpg";
import photo3 from "../../member-photos/Sonam-Swarupa.jpg";
import photo4 from "../../member-photos/Parthipan-P.jpg";
import photo5 from "../../member-photos/pb.jpg";
import photo6 from "../../member-photos/Olivia.png";
import photo7 from "../../member-photos/Tanutrushna-Sahu.jpg";
import photo8 from "../../member-photos/ds.jpg";
import photo9 from "../../member-photos/shk.jpg";
import photo10 from "../../member-photos/adb.jpg";

import "./Members.css";

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
          EB Members
        </h1>
        <Row className="my-5">
          <Col>
            <img class="speak-logos" src={photo1} />
            <h2>ShouratFatma</h2>
            <h5>President</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo2} />
            <h2>SnehaSwain</h2>
            <h5>Vice-President</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo3} />
            <h2>SonamSwarupa</h2>
            <h5>Secretary</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img class="speak-logos" src={photo4} />
            <h2>ParthipanP</h2>
            <h5>Treasurer</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo5} />
            <h2>PurushottamBehera</h2>
            <h5>PR Head</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo6} />
            <h2>OliviaNewton</h2>
            <h5>Content Head</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img class="speak-logos" src={photo7} />
            <h2>TanutrushnaSahu</h2>
            <h5>Design Head</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo8} />
            <h2>DebasishSenapaty</h2>
            <h5>Web Head</h5>
          </Col>
          <Col>
            <img class="speak-logos" src={photo9} />
            <h2>ShishirKhanal</h2>
            <h5>Sophomore Coordinator</h5>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <img class="speak-logos" src={photo10} />
            <h2>AditiBhakat</h2>
            <h5>Sophomore Coordinator</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
