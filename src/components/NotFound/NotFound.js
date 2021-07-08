import './NotFound.css';

import { NavLink } from 'react-router-dom'

function NotFound(props) {
    return (
        <section className="not-found">
            <div className="not-found__info">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">Страница не найдена</p>
            </div>
            <NavLink className="not-found__link" to="/">Назад</NavLink>
        </section>
    )
}

export default NotFound;