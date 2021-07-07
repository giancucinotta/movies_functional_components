import React, { useEffect } from 'react'; // useEffect reemplaza el componentDidMount/componentWillUnmount/componentDidUpdate
import { connect } from 'react-redux';
import { getMovieDetails } from '../../Redux/Actions/index.js';
import './Movie.css';

const Movie = ({match, getMovieDetails, pelicula}) => {

  useEffect(() => { //
    getMovieDetails(match.params.id) 
  }, []); // [] -> Se llama 'dependencias' ☻☺☻☺☻☺ ♥☼♫♪♀♂♥

  return (
    <div className="movie_detail">
      Detalle de la pelicula
      <h1>{pelicula.Title}</h1>
      <h4>{pelicula.Year}</h4>
      <p>{pelicula.Plot}</p>
      <div className="movie_img">
        <img src={pelicula.Poster} />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    pelicula: state.movieDetail
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);