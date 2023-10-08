import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          // eslint-disable-next-line
          return key.id == id;
        });
        setMovie(filme);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-container">

    <div id="movie">
	    <a href="#">
      <img
          className="img_movie"
          src={`${imagePath}${movie.poster_path}`}
          alt={movie.title}
        />
	    </a>
	    <div id="content">
      <h1 className="titulo">{movie.title}</h1>
        <h4 className="data">Data de lançamento: {movie.release_date}</h4>
        <div className="descricao">
          <p className="movie-desc">{movie.overview}</p>
        </div>
        <Link to="/" className="io">
        <button class="button-75" role="button"><span class="text">Voltar</span></button>
        </Link>
	    </div>
    </div>
    </div>

    
  );
};

export default Movie;
