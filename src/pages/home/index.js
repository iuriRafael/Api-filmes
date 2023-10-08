import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
// import Navbar from "../../componentes/navbar";
import Header from "../../componentes/header";
import SearchBar from "../../componentes/SearchBar";



function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);
  
  return (
    <Container>
      {/* <Navbar /> */}
      <Header />
      <SearchBar onSearch={handleSearch} apiKey={KEY} />
      <MovieList>
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <Movie key={movie.id}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
                <span>{movie.title}</span>

                <Link to={`/${movie.id}`}>
                  <Btn>Detalhes</Btn>
                </Link>
              </Movie>
            ))
          : movies.map((movie) => (
              <Movie key={movie.id}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
                <span>{movie.title}</span>

                <Link to={`/${movie.id}`}>
                  <Btn>Detalhes</Btn>
                </Link>
              </Movie>
            ))}
      </MovieList>
    </Container>
  );
}

export default Home;
