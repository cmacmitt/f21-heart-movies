import placeholder from "../images/placeholder.jpg";

const Movie = ({ movie, liked, toggleLikeMovie }) => {
  const { id, title, overview, vote_average, poster_path } = movie;

  const handleClick = (event) => {
    toggleLikeMovie(id);
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path === null
            ? placeholder
            : `https://image.tmdb.org/t/p/w500${poster_path}`
        }
        alt="Movie poster"
      />
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{vote_average}/10</div>
        <div className="plot">{overview}</div>
        <div data-toggled={liked} className="listToggle">
          <div onClick={handleClick}>
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
