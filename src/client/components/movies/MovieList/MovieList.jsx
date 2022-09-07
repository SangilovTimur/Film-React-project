import React from "react";
import MovieItem from "../MovieItem";
import "../../../../App.css";
export default function MovieList({ films }) {
  const movieElem = films.map((item) => <MovieItem key={item.id} {...item} />);
  return <div className="container content">{movieElem}</div>;
}
