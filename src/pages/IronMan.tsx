import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import GifList from "../components/GifList";
import { useAppDispatch } from "../redux";
import { searchGiphy } from "../redux/actions/giphyActions";
import { selectGiphy } from "../redux/reducers/giphy";

function IronMan() {
  const dispatch = useAppDispatch();

  const { giphy } = useSelector(selectGiphy);

  useEffect(() => {
    dispatch(searchGiphy("iron man"));
  }, [dispatch]);

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">IRON MAN GIPHY</h1>
        </Col>
      </Row>

      <GifList search="Iron Man" giphy={giphy} />
    </Container>
  );
}

export default IronMan;
