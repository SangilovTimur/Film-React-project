import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./client/Page/HomePage";
import MoviePage from "./client/Page/MoviePage";
import SingleMoviePage from "./client/Page/SingleMoviePage";
import NavBar from "./client/components/navbars";
import Footer from "./client/components/Footer";
// import Searchbar from "./client/components/Searchbar";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/movie/:id/*" element={<SingleMoviePage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}
