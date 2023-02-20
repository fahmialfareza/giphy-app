import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Giphy App
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/?search=iron+man">
              Iron Man
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
