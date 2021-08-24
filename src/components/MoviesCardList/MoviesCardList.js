import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js';
import React from 'react';

function MoviesCardList(props) {

  const [numberShowedMovies, setNumberShowedMovies] = React.useState(0);
  const [numberAddedMovies, setNumberAddedMovies] = React.useState(0);

  function shownNumberOfMovies(pageWidth) {
    if (pageWidth > 769) {
      return {
        numberShowedMovies: 12,
        numberAddedMovies: 3
      }
    } else if (pageWidth < 481) {
      return {
        numberShowedMovies: 8,
        numberAddedMovies: 2
      }
    } else {
      return {
        numberShowedMovies: 5,
        numberAddedMovies: 2
      }
    }
  };

  function setShownNumberOfMovies() {
    const pageWidth = window.innerWidth;
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
        />))
        }

      </ul>
      <button className={`${props.movies && props.movies.length === renderedMovies.length ? 'hidden' : "movies__button"}`} onClick={handleAddMovies}>Ещё</button>
    </section>
  )

}


export default MoviesCardList;