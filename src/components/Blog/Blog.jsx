import { Container, Col, Row, NavLink } from "react-bootstrap";

import "./Blog.css";

export default function Events() {
  return (
    <div id="prizes">
      <Container className="py-5">
        <br></br>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="prizes-text-blog text-right grad-text"
        >
          Blog
        </h1>
        <Row>
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            sm
            className="pt-5"
          >
            <NavLink href="/events.genx-news">
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
            <NavLink href="/events.genx-articles">
              <div class="flip-card-prize">
                <div class="flip-card-inner-prize">
                  <div class="flip-card-front-prize">
                    <h1 className="mainhead1-prize">Gen-X Articles</h1>
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
