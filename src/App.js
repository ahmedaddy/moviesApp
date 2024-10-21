import React, { useEffect } from "react";
import axios from "axios";

import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const getPage = async (page) => {
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=ffcb86e2fb141a342f762e30f20a88b8`
  //   );
  //   console.log(res.data.total_pages);
  // };
  // useEffect(() => {
  //   getPage();
  // }, []);
  return (
    <div className="font color-body ">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
