import { Container, Col, Row, NavLink } from "react-bootstrap";

import "./Events.css";

export default function Prizes() {
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
          ><NavLink href="/genx-news">
            <div class="flip-card-prize">
              <div class="flip-card-inner-prize">
                <div class="flip-card-front-prize">
                  <h1 className="mainhead1-prize">Gen-X News</h1>
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
            <div class="flip-card-prize">
              <div class="flip-card-inner-prize">
                <div class="flip-card-front-prize">
                  <h1 className="mainhead1-prize">Gen-X Articles</h1>
                </div>
              </div>
            </div>
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
            <div class="flip-card-prize">
              <div class="flip-card-inner-prize">
                <div class="flip-card-front-prize">
                  <h1 className="mainhead1-prize">Gen-X Conference</h1>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
