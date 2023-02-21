import React from "react";
import { Col } from "react-bootstrap";

function NotFound() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row text-center d-flex align-items-center">
        <Col>
          <h1>404 Not Found</h1>
        </Col>
      </div>
    </div>
  );
}

export default NotFound;
