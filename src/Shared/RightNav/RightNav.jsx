import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle />
        Login in with google
      </Button>

      <Button className="mb-2 w-100" variant="outline-secondary">
        <FaGithub />
        Login with github
      </Button>

      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="p-4">
            <FaFacebook className="fs-1 px-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            <FaInstagram className="fs-1 px-2" />
            Instagram
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            <FaTwitter className="fs-1 px-2" />
            Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>

      <QZone />
      <div className="mt-5 position-relative">
        <div>
          <img className="w-100" src={bg} alt="" />
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="text-light">Create an Amazing Newspaper</h2>
          <p className="text-light">
            Discover thousands of options, easy to customize layouts, one-click to import demo and
            much more.
          </p>
          <Button className="rounded-0 p-4 fs-5" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
