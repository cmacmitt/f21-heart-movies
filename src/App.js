import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import searchMovies from "./services/movie-API";

function App() {
  // create the state the holds the movies
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  // create the useEffect that populates the movies from the API
  useEffect(() => {
    searchMovies("fight club").then((movies) => setMovies(movies));
  }, []);

  const handleSearch = (query) => {
    searchMovies(query).then((movies) => setMovies(movies));
  };

  const handleToggleLikeMovie = (id) => {
    // add or remove the movie id to likedMovies
    setLikedMovies((prevState) => {
      if (prevState.findIndex((movieId) => movieId === id) === -1) {
        return [...prevState, id];
      }

      return prevState.filter((movieId) => movieId !== id);
    });
  };

  return (
    <>
      <Header>
        <Form searchMovies={handleSearch} />
      </Header>
      <MovieList
        movies={movies}
        likedMovies={likedMovies}
        toggleLikeMovie={handleToggleLikeMovie}
      />
    </>
  );
}

export default App;
