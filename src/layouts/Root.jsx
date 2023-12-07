import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <h2>Main content is here.</h2>
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
