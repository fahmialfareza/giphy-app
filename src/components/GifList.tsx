import React from "react";
import { useSearchParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectGiphy } from "../redux/reducers/giphy";
import GifItem from "./GifItem";

function GifList() {
  const [searchParams] = useSearchParams();

  const { giphy } = useSelector(selectGiphy);

  return (
    <Row className="my-4">
      {giphy.length > 0 ? (
        giphy.map((gif) => (
          <Col md={4} className="my-2">
            <GifItem giphy={gif} />
          </Col>
        ))
      ) : (
        <Col className="text-center">
          <h1>No result for "{searchParams.get("search")}"</h1>
        </Col>
      )}
    </Row>
  );
}

export default GifList;
