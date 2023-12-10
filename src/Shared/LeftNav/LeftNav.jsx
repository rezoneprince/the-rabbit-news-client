import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import moment from "moment/moment";
import { CiCalendarDate } from "react-icons/ci";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoris")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Category</h2>
      <div className="p-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-secondary text-decoration-none fs-5"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <Row xs={1} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Text>
                <p className="m-0 d-flex align-items-center">
                  <span>
                    <CiCalendarDate className="fs-4" />
                  </span>{" "}
                  {moment().format("MMMM D, YYYY")}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Text>
                <p className="m-0 d-flex align-items-center">
                  <span>
                    <CiCalendarDate className="fs-4" />
                  </span>{" "}
                  {moment().format("MMMM D, YYYY")}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Text>
                <p className="m-0 d-flex align-items-center">
                  <span>
                    <CiCalendarDate className="fs-4" />
                  </span>{" "}
                  {moment().format("MMMM D, YYYY")}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
