import React from "react";
import "../Landing/Landing.css";
import { Button } from "react-bootstrap";
import ParticleBackground from "../ParticleBackground/ParticleBackground";

export default function Landing() {
  return (
    <div className="landing" id="home">
      <ParticleBackground />
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="topline"
        style={{ fontFamily: "Poppins" }}
      >
        Welcome To
      </h3>
      <h1 data-aos="fade-up" data-aos-duration="1000" className="mainhead">
        Genesys
      </h1>
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="date"
        style={{ fontFamily: "Poppins" }}
      >
        The Bioengineering Club of NIT Rourkela
      </h3>

      {/* <div className="my-4">
        <Button
          data-aos="fade-right"
          data-aos-duration="500"
          variant="outline-light"
          size="xxl"
          className="btn m-2"
          style={{ fontFamily: "Poppins" }}
          href="#"
          target="__blank"
          disabled
        >
          Action Button
        </Button>
      </div> */}
    </div>
  );
}
