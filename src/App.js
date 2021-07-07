import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/SearchBar/Buscador";
import NavBar from "./components/Nav/Nav";
import { Route } from "react-router-dom";
import Movie from "./components/MovieDetails/Movie";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Buscador} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
    </React.Fragment>
  );
}

export default App;