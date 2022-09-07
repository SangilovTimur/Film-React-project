import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../../components/cast/CastList";
import ReviewList from "../../components/ReviewList";
import axios from "axios";

export default function SingleMoviePage() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=826ff55be219075fe0c51d998b696b2f&language=en-US`
      )
      .then(async (response) => {
        console.log(response);
        const data = await response.data;
        setMovies(data);
        console.log(data);
      });
  }, [id]);

  const navElems = movies.genres?.map((item) => {
    return <p>{item.name}</p>;
  });

  return (
    <>
      <div className="singleCard container">
        <div className="card-image">
          <img
            className="card-img"
            src={` https://image.tmdb.org/t/p/w500${
              movies.poster_path || movies.backdrop_path || movies.defaultImage
            }`}
            alt="img"
          />
        </div>
        <div className="card-action">
          <span className="card-title">
            {movies.original_title || movies.title}
          </span>
          <p>User score : {movies.vote_average}</p>
          <p>{movies.overview}</p>
          <p>Release Date : {movies.release_date}</p>
          <div className="genres">Genres: {navElems}</div>
          <p>Run Time : {movies.runtime}</p>
          <div className="button">
            <button className="btn singlePageBtn">
              <Link className="cast" to="cast">
                Cast
              </Link>
            </button>
            <button className="btn singlePageBtn">
              <Link className="reviews" to="reviews">
                Reviews
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<ReviewList />} />
      </Routes>
    </>
  );
}
