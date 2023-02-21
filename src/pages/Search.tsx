import React, { ChangeEvent, useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../redux";
import { searchGiphy } from "../redux/actions/giphyActions";
import GifList from "../components/GifList";
import { selectGiphy } from "../redux/reducers/giphy";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { giphy } = useSelector(selectGiphy);

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChangeSearch, 500);
  }, []);

  useEffect(() => {
    if (searchParams && searchParams.get("search")) {
      setSearch(searchParams.get("search") || "");
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ search });
    dispatch(searchGiphy(search));
  }, [search, setSearchParams, dispatch]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <Container className="mt-5 mb-2">
      <Row>
        <Col>
          <h1 className="text-center">SEARCH YOUR GIPHY</h1>
        </Col>
      </Row>

      <Row className="mt-2 mb-5">
        <Col md={2}></Col>
        <Col md={8}>
          <InputGroup>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search Giphy"
              onChange={debouncedResults}
              defaultValue={search}
            />
          </InputGroup>
        </Col>
        <Col md={2}></Col>
      </Row>

      <GifList search={search} giphy={giphy} />
    </Container>
  );
}

export default Search;
