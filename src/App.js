import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import searchMovies from "./services/movie-API";

function App() {
  // create the state the holds the movies
  const [movies, setMovies] = useState([]);

  // create the useEffect that populates the movies from the API
  useEffect(() => {
    searchMovies("fight club").then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <Header>
        <Form />
      </Header>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
