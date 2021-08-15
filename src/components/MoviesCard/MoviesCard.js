import React from 'react';
import SavedMovies from '../SavedMovies/SavedMovies';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation().pathname;
  const [isSaved, setIsSaved] = React.useState(false);

  const movie = {
    country : props.movie.country || 'Страна не указана',
    director: props.movie.director || 'Режиссер не указан',
    duration: props.movie.duration || 'Продолжительность не указана',
    year: props.movie.year || 'Год не указан',
    description: props.movie.description || 'Описание не указано',
    image: `https://api.nomoreparties.co${props.movie.image?.url}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || props.movie.nameEN || 'Название не указано',
    nameEN: props.movie.nameEN || 'Англ название не указано',
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,

  }

  function isLikedMovie() {
    if (localStorage.getItem('savedMovies')) {
      let savedMovies = JSON.parse(localStorage.getItem("SavedMovies"));
      if (savedMovies.some(movie => movie.nameRU === props.movie.nameRU)) {
        setIsSaved(true);
      }
    }
  }

  React.useEffect(() => {
    isLikedMovie();
  }, []);

  function handleClickSave() {
    setIsSaved(true)
    props.onSavedMovie(movie)
  }

  function handleClickDelete() {
    setIsSaved(false)
    props.onDeleteMovie(props.movie._id)
  }


  return (
    <li className="movie">
      <div className="movie-info-container">
        <div className="movie__info">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__time">{movie.duration}</p>
        </div>

        {props.isSaved ? 
         (<button onClick={handleClickDelete} 
         className="movie__bookmark movie__bookmark_type_delete"></button>)
         : (<button onClick={isSaved ? false : handleClickSave } 
          className={isSaved ? "movie__bookmark movie__bookmark_type_save-active" : "movie__bookmark movie__bookmark_type_save"}></button>)
      
      }
       
      </div>
      <a className="movie__link" href={movie.trailer}><img src={movie.image} alt="#" className="movie__image" /></a>
    </li>
  )
}

export default MoviesCard;



