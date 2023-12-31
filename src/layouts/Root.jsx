import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Root;
