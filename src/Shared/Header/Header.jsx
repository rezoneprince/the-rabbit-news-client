import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

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
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto text-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                <img style={{ width: "40px", height: "40px" }} src={user} alt="" />
                <Button className="rounded-0 px-4 mx-2" variant="dark">
                  Login
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
