import React, {
  useState,
  useEffect,
  useMemo,
  ChangeEvent,
  FormEvent,
} from "react";
import { useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../redux";
import { searchGiphy } from "../redux/actions/giphyActions";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChangeSearch, 500);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch(search);
  };

  useEffect(() => {
    if (searchParams && searchParams.get("search")) {
      setSearch(searchParams.get("search") || "");
    }
  }, [searchParams]);

  useEffect(() => {
    if (search) {
      setSearchParams({ search });
      dispatch(searchGiphy(search));
    }
  }, [search, setSearchParams, dispatch]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Form className="mx-auto " onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search Your Giphy"
          className="me-2"
          aria-label="Search"
          size="lg"
          onChange={debouncedResults}
          defaultValue={search}
        />
      </Form>
    </>
  );
}

export default SearchBar;
