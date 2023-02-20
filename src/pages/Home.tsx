import React from "react";
import { Container } from "react-bootstrap";
import GifList from "../components/GifList";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />

      <Container>
        <GifList />
      </Container>
    </>
  );
}

export default Home;
