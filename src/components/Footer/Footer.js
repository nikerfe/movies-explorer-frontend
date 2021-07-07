import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__info">
          <p className="footer__copyright">&copy; 2021</p>
          <ul className="footer__links">
            <li className="footer__links-item">
              <a className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a className="footer__link" href="https://github.com/nikerfe">Github</a>
            </li>
            <li className="footer__links-item">
              <a className="footer__link" href="https://facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;