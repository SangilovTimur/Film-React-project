import React, { useEffect, useState } from "react";
import axios from "axios";

import Preloader from "../../components/Preloader";
import Movies from "../../components/movies";
import LoadMore from "../../components/LoadMore";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const apiMovie = `https://api.themoviedb.org/3/trending/all/day?api_key=826ff55be219075fe0c51d998b696b2f&page=${page}`;
    axios.get(apiMovie).then(async (response) => {
      console.log(response);
      const data = await response.data;
      setMovies([...movies, ...data.results]);
      console.log(data);
    });
  }, [page]);

  const showMoreFilms = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      {movies.length ? <Movies films={movies} /> : <Preloader />}
      <LoadMore onClick={showMoreFilms} />
    </>
  );
}
