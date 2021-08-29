import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation().pathname;
  const savedMoviesRoute = (location === "/saved-movies") ? true : false;
  const [isSaved, setIsSaved] = React.useState(false);

  const movie = {
    country: props.movie.country || 'Страна не указана',
    director: props.movie.director || 'Режиссер не указан',
    duration: props.movie.duration || 'Продолжительность не указана',
    year: props.movie.year || 'Год не указан',
    description: props.movie.description || 'Описание не указано',
    image: savedMoviesRoute ? `${props.movie.image}` : `https://api.nomoreparties.co${props.movie.image?.url}`,
    trailer: savedMoviesRoute ? props.movie.trailer : props.movie?.trailerLink,
    nameRU: props.movie.nameRU || props.movie.nameEN || 'Название не указано',
    nameEN: props.movie.nameEN || 'Англ название не указано',
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,
  }

  function getTimeFromMins(movie) {
    let hours = Math.trunc(movie / 60);
    let minutes = movie % 60;
    return `${hours}ч ${minutes}м`
  };

  function savedMoviesLocal() {
    if (localStorage.getItem('SavedMovies')) {
      let savedMovies = JSON.parse(localStorage.getItem("SavedMovies"));
      return savedMovies
    } else {
      return []
    }
  }

  function checkSavedMovie() {
      let savedMovies = savedMoviesLocal()
      if (savedMovies.map(item => item.movieId).includes(props.movie.id)) {
        setIsSaved(true);
      }
  }

  React.useEffect(() => {
    checkSavedMovie();
  }, []);

  function handleClickSave() {

    props.onSavedMovie(movie)
    setIsSaved(true);
  }

  function handleClickDeleteFromSavedMovies() {
    props.onDeleteMovie(props.movie._id)
  }

  function handleClickDeleteFromMovies() {
    let savedMovies = savedMoviesLocal()
    console.log(savedMovies)
    const movie = savedMovies.find(movie => movie.nameRU === props.movie.nameRU);
    props.onDeleteMovie(movie._id);
    setIsSaved(false)
  }


  return (
    <li className="movie">
      <div className="movie-info-container">
        <div className="movie__info">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__time">{getTimeFromMins(movie.duration)}</p>
        </div>

        {props.isSaved ?
          (<button onClick={handleClickDeleteFromSavedMovies}
            className="movie__bookmark movie__bookmark_type_delete"></button>)
          : (<button onClick={isSaved ? handleClickDeleteFromMovies : handleClickSave}
            className={isSaved ? "movie__bookmark movie__bookmark_type_save-active" : "movie__bookmark movie__bookmark_type_save"}></button>)

        }

      </div>
      <a className="movie__link" href={movie.trailer}><img src={movie.image} alt="#" className="movie__image" /></a>
    </li>
  )
}

export default MoviesCard;



