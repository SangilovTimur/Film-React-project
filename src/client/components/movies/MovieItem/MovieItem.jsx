import React from "react";
import { Link } from "react-router-dom";
// import defaultImage from "../../../../image/No_Image_Available.jpg";
export default function MovieItem({
  vote_average,
  poster_path,
  name,
  backdrop_path,
  overview,
  title,
  id,
}) {
  return (
    <div className="card">
      <Link to={`/movie/${id}/*`}>
        <div className="card-image">
          <img
            className="card-img"
            src={` https://image.tmdb.org/t/p/w500${
              poster_path || backdrop_path
            }`}
            alt="img"
          />
        </div>
        <div className="card-action">
          <span className="card-title">{name || title}</span>

          <p>User score : {vote_average}</p>
        </div>
      </Link>
    </div>
  );
}
