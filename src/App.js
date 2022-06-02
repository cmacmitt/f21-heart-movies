import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MovieList from "./components/MovieList";

function App() {
  // create the state the holds the movies
  // create the useEffect that populates the movies from the API
  return (
    <>
      <Header>
        <Form />
      </Header>
      <MovieList />
    </>
  );
}

export default App;
