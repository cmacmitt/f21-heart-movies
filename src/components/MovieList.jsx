import Movie from "./Movie";

const MovieList = ({ movies, likedMovies, toggleLikeMovie }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Movies</h1>
        <div className="titles-wrapper">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
              toggleLikeMovie={toggleLikeMovie}
              liked={
                likedMovies.findIndex(
                  (likedMovieId) => movie.id === likedMovieId
                ) === -1
                  ? false
                  : true
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
