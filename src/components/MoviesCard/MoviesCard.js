import React from 'react';
import './MoviesCard.css';
import front from '../../images/front.jpg'
function MoviesCard(props) {


  return (
    <div className="movie" >
      <div className="movie-info-container">
        <div className="movie__info">
          <h2 className="movie__title">Дорога на фронт</h2>
          <p className="movie__time">360:58</p>
        </div>
        <button className="movie__bookmark movie__bookmark_type_save"></button>
      </div>
      <img src={front} alt="#" className="movie__image" />
    </div>
  )
}

export default MoviesCard;