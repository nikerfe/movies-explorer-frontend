import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js';
import React from 'react';
import constans from '../../utils/constans.js'

function MoviesCardList(props) {

  const [numberShowedMovies, setNumberShowedMovies] = React.useState(0);
  const [numberAddedMovies, setNumberAddedMovies] = React.useState(0);
  
  function shownNumberOfMovies(pageWidth) {
    if (pageWidth > 934) {
      return {
        numberShowedMovies: constans.NUMBER_SHOWED_MOVIES_PAGEWIDTH_1280,
        numberAddedMovies: constans.NUMBER_ADDEDD_MOVIES_PAGEWIDTH_1280
      }
    } else if (600 < pageWidth < 934) {
      return {
        numberShowedMovies: constans.NUMBER_SHOWED_MOVIES_PAGEWIDTH_768,
        numberAddedMovies: constans.NUMBER_ADDEDD_MOVIES_PAGEWIDTH_768
      }
    } else {
      return {
        numberShowedMovies: constans.NUMBER_SHOWED_MOVIES_PAGEWIDTH_480,
        numberAddedMovies: constans.NUMBER_ADDEDD_MOVIES_PAGEWIDTH_480
      }
    }
  };

  function setShownNumberOfMovies() {
    const pageWidth = document.querySelector('.page').clientWidth;
    const shownCardsParameters = shownNumberOfMovies(pageWidth);
    setNumberShowedMovies(shownCardsParameters.numberShowedMovies);
    setNumberAddedMovies(shownCardsParameters.numberAddedMovies);
  }

  React.useEffect(() => {
    setShownNumberOfMovies();
  }, []);



  function handleAddMovies() {
    setNumberShowedMovies(prev => prev + numberAddedMovies);
  }

  const renderedMovies = props.movies && props.movies.slice(0, numberShowedMovies);

  return (
    <section className="movies">

      <Preloader isLoading={props.isLoading} />
      <p className={`movies__error ${props.error ? '' : 'hidden'}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.</p>
      <p className={`movies__not-found ${props.notFound ? '' : 'hidden'}`}>Ничего не найдено</p>
      <ul className="movies__list">

        {renderedMovies && renderedMovies.map(item =>
        (<MoviesCard
          movie={item}
          key={props.isSaved ? item.id : item.movieId}
          onMovieSave={props.onMovieSave}
          isMovieSaved={props.isMovieSaved}
          savedCards={props.savedCards}
          isSaved={props.isSaved}
          onSavedMovie={props.onSavedMovie}
          onDeleteMovie={props.onDeleteMovie}
          savedMovies={props.savedMovies}
          isShortMovies={props.checkboxShortMovies}
        />))
        }

      </ul>
      <button className={`${props.movies && props.movies.length === renderedMovies.length ? 'hidden' : "movies__button"}`} onClick={handleAddMovies}>Ещё</button>
    </section>
  )

}


export default MoviesCardList;