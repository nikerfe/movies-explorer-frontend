import { NavLink, Route, useHistory } from 'react-router-dom';
import React from 'react';
import account from '../../images/header__account.svg';
import './Header.css';
import Logo from '../Logo/Logo.js';




function Header(props) {
    const [isNavigationOpen, setNavigationOpen] = React.useState(false);
    function handleNavigationOpenClick() { setNavigationOpen(true) };

    return (
        <header className="header">
            <Route path={["/signup", "/signin"]}>
                <Logo
                    name="auth"
                />
            </Route>
            <Route path="/main">
                <Logo />
                <ul className="header__list-link">
                    <li className="header__item-link header__item-link_type_signup"><NavLink to="/signup"
                        className="header__link header__link_type_signup" activeClassName="header__link_type_signup-active">Регистрация</NavLink></li>
                    <li className="header__item-link header__item-link_type_signin"><NavLink to="/signin"
                        className="header__link header__link_type_signin" activeClassName="auth__sign-in_signin-active">Войти</NavLink></li>
                </ul>

            </Route>
            <Route path={["/movies", "/savedmovies", "/profile"]}>
                <Logo />
                <button className="header__button_burger" onClick={props.onNavigationOpen}></button>
            </Route>
        </header>
    )
}

export default Header;