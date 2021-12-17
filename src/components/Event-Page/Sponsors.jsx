import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Sponsors.css";

import taskade from "../../sponsor-logos/taskade.png";
import draftbit from "../../sponsor-logos/draftbit.png";
import cppsecrets from "../../sponsor-logos/cppsecrets.png";
import xyz from "../../sponsor-logos/xyz.svg";
import cn from "../../sponsor-logos/cn.svg";
import GMC from "../../sponsor-logos/GMC.png";
import Rahee from "../../sponsor-logos/Raahee.png";
import symbl from "../../sponsor-logos/symbl.png";
import sawo from "../../sponsor-logos/sawo.png";
import koi from "../../sponsor-logos/koi.png";
import Wolfram from "../../sponsor-logos/Wolfram.png";
import balsamiq from "../../sponsor-logos/balsamiq.png";
import egghead from "../../sponsor-logos/eggheaad.jfif";
import techBairn from "../../sponsor-logos/TechBairn.jpeg";
import noticebard from "../../sponsor-logos/noticebard.jpeg";

export default function Sponsors() {
  return (
    <div className="sponsors" id="sponsors">
      <Container className="py-5">
        <br />
        <h1
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="text-silver">Gen-X-News</span>
        </h1>
        <Row className="my-5">
          <Col className="spon-col">
            <a href="https://symbl.ai/" target="__blank">
              <img className="spon-logos" src={symbl} />
            </a>
          </Col>

          <Col className="spon-col">
            <a href="https://sawolabs.com/" target="__blank">
              <img className="spon-logos" src={sawo} />
            </a>
          </Col>

          <Col className="spon-col">
            <a href="https://koii.network/" target="__blank">
              <img className="spon-logos" src={koi} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
