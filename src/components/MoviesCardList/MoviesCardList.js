import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader.js';
import { useLocation } from 'react-router-dom';

function MoviesCardList(props) {
 

    return (
      <section className="movies">

        <Preloader />
        <ul className="movies__list">

          {props.movies.map(item =>
          (<MoviesCard
            movie={item}
            key={props.isSaved ? item.id : item.movieId}
            onMovieSave={props.onMovieSave}
            isMovieSaved={props.isMovieSaved}
            savedCards={props.savedCards}
            isSaved={props.isSaved}
            onSavedMovie={props.onSavedMovie}
            onDeleteMovie={props.onDeleteMovie}
          />))
          }

        </ul>
        <button className="movies__button">Ещё</button>
      </section>
    )
 
  }


export default MoviesCardList;