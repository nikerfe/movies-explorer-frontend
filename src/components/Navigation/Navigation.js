import { NavLink, Route, useHistory } from 'react-router-dom';
import React from 'react';
import account from '../../images/header__account.svg';
import './Navigation.css';


function Navigation(props) {



    return (
        <nav className={`navigation ${props.isOpen ? 'navigation_open' : false}`}>
            <div className={`navigation__container ${props.isOpen ? 'navigation__container_open' : false}`} >
                <button className="navigation__button_close" onClick={props.onNavigationClose}></button>
                <ul className="navigation__list-link">
                    <li className="navigation__item-link navigation__item-link_type_movies"><NavLink to="/main"
                        className="navigation__link navigation__link_type_movies navigation__link_type_main" activeClassName="navigation__link_active">Главная</NavLink></li>
                    <li className="navigation__item-link navigation__item-link_type_movies"><NavLink to="/movies"
                        className="navigation__link navigation__link_type_movies" activeClassName="navigation__link_active">Фильмы</NavLink></li>
                    <li className="navigation__item-link navigation__item-link_type_saved-movies"><NavLink to="/savedmovies"
                        className="navigation__link navigation__link_type_saved_movies" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink></li>
                    <li className="navigation__item-link navigation__item-link_type_profile"><NavLink to="/profile"
                        className="navigation__link navigation__link_type_profile" activeClassName="navigation__link_active">Аккаунт</NavLink>
                        <img src={account} alt="логотип" className="navigation__account" /></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation;