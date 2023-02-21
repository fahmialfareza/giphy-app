import React from "react";
import { Row, Col } from "react-bootstrap";

import { GiphyData } from "../models/giphy";
import GifItem from "./GifItem";

interface GifListProps {
  search: string;
  giphy: GiphyData[];
  loading: boolean;
}

function GifList({ search, giphy, loading }: GifListProps) {
  if (loading) {
    <Col>
      <h1 className="text-center">Loading...</h1>
    </Col>;
  }

  return (
    <Row className="my-4">
      {giphy.length > 0 ? (
        giphy.map((gif) => (
          <Col md={4} className="my-2">
            <GifItem giphy={gif} />
          </Col>
        ))
      ) : (
        <Col>
          <h1 className="text-center">No result for "{search}"</h1>
        </Col>
      )}
    </Row>
  );
}

export default GifList;
