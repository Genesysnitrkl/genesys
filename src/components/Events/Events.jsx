import { Container, Col, Row, NavLink } from "react-bootstrap";

import "./Events.css";

export default function Events() {
  return (
    <div id="prizes">
      <Container className="py-5">
        <br></br>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="prizes-text text-right grad-text"
        >
          Events
        </h1>
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            sm
            className="pt-5"
          >
            <NavLink href="/events.genx-conference">
              <div class="flip-card-prize">
                <div class="flip-card-inner-prize">
                  <div class="flip-card-front-prize">
                    <h1 className="mainhead1-prize">Gen-X Conference</h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            sm
            className="pt-5"
          >
            <NavLink href="/events.geno-mania">
              <div class="flip-card-prize">
                <div class="flip-card-inner-prize">
                  <div class="flip-card-front-prize">
                    <h1 className="mainhead1-prize">Gen-O Mania</h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            sm
            className="pt-5"
          >
            <NavLink href="/events.maze-hunt">
              <div class="flip-card-prize">
                <div class="flip-card-inner-prize">
                  <div class="flip-card-front-prize">
                    <h1 className="mainhead1-prize">Maze Hunt</h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            sm
            className="pt-5"
          >
            <NavLink href="/events.bpsdp">
              <div class="flip-card-prize">
                <div class="flip-card-inner-prize">
                  <div class="flip-card-front-prize">
                    <h1 className="mainhead1-prize-un1">BPSDP</h1>
                  </div>
                </div>
              </div>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
