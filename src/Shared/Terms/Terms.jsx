import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam aliquid maxime, provident
        voluptatibus est ut voluptatum esse iure tempora?
      </p>
      <p>
        <Button variant="warning">
          <Link class="text-dark text-decoration-none fw-bold" to="/register">
            Go back to register
          </Link>
        </Button>
      </p>
    </Container>
  );
};

export default Terms;
