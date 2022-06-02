// import API_KEY from "../api-key";
const API_KEY = "29f883559f6c66cbed8fb0b227b66d58";

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const searchMovies = async (query) => {
  const request = await fetch(`${SEARCH_URL}&query=${query}`);
  const response = await request.json();
  const movies = await response.results;
  return movies;
};

export default searchMovies;
