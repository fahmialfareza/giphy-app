import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row text-center d-flex align-items-center">
        <Container>
          <Row className="my-2">
            <Col>
              <h1>WELCOME TO YOUR GIPHY</h1>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Image
                src="/Giphy-logo.svg"
                width={"20%"}
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Link to={"/iron-man"}>IRON MAN GIPHY</Link>
            </Col>
          </Row>

          <Row className="my-2">
            <Col>
              <Link to={"/search"}>SEARCH YOUR GIPHY</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
