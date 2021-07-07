import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import save from '../../images/save.svg'

function MoviesCarddivst(props) {
  return (
    <section className="movies">
      <div className="movies__list">

        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />

      </div>
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default MoviesCarddivst;