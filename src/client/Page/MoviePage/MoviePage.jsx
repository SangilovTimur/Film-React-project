import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../../components/Searchbar";
import LoadMore from "../../components/LoadMore";
import Movies from "../../components/movies";
export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        setMovies([...movies, ...data.results]);
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        setMovies(data.results);
      });
  }, [query]);
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (query) => {
    setQuery(query);
  };
  const showMoreFilms = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <div className="container">
        <Searchbar
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={query}
        />
      </div>
      <Movies films={movies} />
      {movies.length > 1 && <LoadMore onClick={showMoreFilms} />}
    </>
  );
}
