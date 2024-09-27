import axios from "axios"
import { useState, useEffect } from "react"
import './Movies.css'
import Corner from "./Corner"
const Movies = () => {

  const [movie, setMovie] = useState([])

    useEffect(()=>{
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params:{
          api_key: '9bb3ac96cb16f64bdcbf08719c0660a6',
          language: 'pt-BR'
        }
      }).then((res) => {
          setMovie(res.data.results)
          console.log(res.data.results)
      })     .catch((err) => {
        console.error("Erro ao buscar os filmes: ", err);
      });
    }, [])


    return (
      <div className="container">
        {movie.map((movie) => (
          <div key={movie.id} className="movie-item">
            <span className="tooltip">
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                className="imgCards" 
                alt={movie.title}
              />
              <span className="tooltip-text">{movie.title}</span> <br />
              <span className="assessment">{movie.vote_average}</span>
            </span>
          </div>
        ))}
        <Corner />
      </div>
    )
    
}
export default Movies;

