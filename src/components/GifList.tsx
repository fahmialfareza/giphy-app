import React from "react";
import { Row, Col } from "react-bootstrap";

import { GiphyData } from "../models/giphy";
import GifItem from "./GifItem";

interface GifListProps {
  search: string;
  giphy: GiphyData[];
}

function GifList({ search, giphy }: GifListProps) {
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
          <h1>No result for "{search}"</h1>
        </Col>
      )}
    </Row>
  );
}

export default GifList;
