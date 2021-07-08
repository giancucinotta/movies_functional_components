import React, { useState } from 'react';
import { getMovies, addMovieFavorite } from '../../Redux/Actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Buscador.css';

const Buscador = ({ getMovies, addMovieFavorite, movies }) => {
  // useState setea el estado local del componente
  const [title, setTitle] = useState('');
  
  const handleChange = (e) => {
    setTitle(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(title);
    setTitle('');
  };

  return (
    <div className='buscador'>
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={handleChange}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            movies && movies.map((el, i) => (
              <div className='container' key={el.imdbID}>
                <Link to={`/movie/${el.imdbID}`}>{el.Title}</Link>
                <button onClick={() => addMovieFavorite({ title: el.Title, id: el.imdbID })}>Fav</button> {/* Con este botón se despacha una accion para que agregue a favs. Arrow function porque le quiero pasar parámetros (no ejecutarla, sino definirla) */}
                <img src={el.Poster}/>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
};

function mapStateToProps(state) { // Hace referencia al estado global 
  return {
    movies: state.moviesLoaded
  }
};

function mapDispatchToProps(dispatch) { // Despacha accion al reducer
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);