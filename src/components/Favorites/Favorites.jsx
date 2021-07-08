import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovie } from '../../Redux/Actions/index';

import './Favorites.css';

const Favorites = ({ movies, removeMovie }) => {

  return (
    <div>
      <h2>Películas Favoritas</h2>
      <ul>
        {
          movies && movies.map(el => (
            <div>
              <Link to={`/movie/${el.id}`}>
                <span>{el.title}</span>
              </Link>
              <button onClick={() => removeMovie(el.id)}>X</button>
            </div>
          ))
        }
      </ul>
    </div >
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovie: (id) => dispatch(removeMovie(id))
  }
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavourites
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
