import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "../redux/action/moviesAction";

const MoviesList = ({ getPage, totalPages }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <>
      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} totalPages={totalPages} />
      ) : null}

      <Row className="mt-3">
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })
        ) : (
          <h2 className="text-center p-5">there is no movies</h2>
        )}
      </Row>
    </>
  );
};

export default MoviesList;
