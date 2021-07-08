import './Promo.css';

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект <nobr>студента факультета</nobr> Веб-разработки.</h1>
        <ul className="promo__list">
          <li className="promo__item">
            <div className="promo__link">О проекте</div>
          </li>
          <li className="promo__item">
            <div className="promo__link">Технологии</div>
          </li>
          <li className="promo__item">
            <div className="promo__link">Студент</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Promo;