import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import users from "../../assets/user.png";
import { AuthContent } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContent);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center">
              <Link
                className="text-decoration-none d-flex align-items-center text-dark fw-bold"
                to="/category/0"
              >
                Home
              </Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link className="p-0" href="#pro">
                  {<img style={{ width: "40px", height: "40px" }} src={users} alt="" />}
                </Nav.Link>
              )}

              {user ? (
                <Button onClick={handleLogout} className="rounded-0 px-4 mx-2" variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="rounded-0 px-4 mx-2" variant="dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
