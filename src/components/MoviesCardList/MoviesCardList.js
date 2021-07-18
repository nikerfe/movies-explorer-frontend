import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import save from '../../images/save.svg'

function MoviesCarddivst(props) {
  return (
    <section className="movies">
      <ul className="movies__list">

        <li className="movies__item">
          <MoviesCard />
          </li>

      </ul>
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default MoviesCarddivst;