import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container className="mt-2">
        <div className="text-center py-2">
          <img src={logo} alt="" />
          <p className="text-secondary">Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button className="rounded-0" variant="danger">
            Latest
          </Button>
          <Marquee
            style={{ cursor: "pointer" }}
            className="text-danger "
            pauseOnHover={true}
            speed={50}
          >
            I can be a React component, multiple React components, or just some text. <br /> I can
            be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default Header;
