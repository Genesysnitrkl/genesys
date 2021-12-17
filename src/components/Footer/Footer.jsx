import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo1 from "../../images/nitrkl-logo.png";
import { SocialIcon } from "react-social-icons";
import bg from "../../images/bggif.gif";

import "../Footer/footer.css";

export default function Footer() {
  return (
    <div
      className="footer"
      id="footer"
      class="bg_image"
      style={{
        backgroundImage: "url(" + bg + ")",
        height: "100%",
        color: "#f5f5f5",
      }}
    >
      <h1 className="grad-text">Contact us</h1>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="2">
              <img id="comlogo" className="com-logo" src={Logo1} />
            </MDBCol>
            <MDBCol md="6">
              <h3 className="title">GENESYS</h3>
              <p style={{ fontFamily: "DM Sans" }}>
                The bioengineering club under the technical society of Student
                Activity Center, NIT ROURKELA.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <h3 className="title">Connect with us at: </h3>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "75%",
                  margin: "0 auto",
                }}
              >
                <SocialIcon
                  url="mailto:nitrklgenesys@gmail.com"
                  target="__blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/genesys-nit-rourkela-952a661b3/"
                  target="__blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://www.instagram.com/genesys_nitr/"
                  target="__blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://www.facebook.com/nitr.genesys/"
                  target="__blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCzzwOZWHroDqV6DM7nFI6LA"
                  target="__blank"
                  rel="noopener noreferrer"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          id="copyright"
          style={{ backgroundColor: "black", fontFamily: "DM Sans" }}
        >
          <MDBContainer fluid style={{ color: "white" }}>
            <MDBRow className="mdb-col">
              <MDBCol>&copy; {new Date().getFullYear()} Copyright</MDBCol>
              <MDBCol>Made by Genesys Web Team.</MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
