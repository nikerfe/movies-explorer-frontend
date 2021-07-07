import React from 'react';
import './AboutMe.css';
import { Route, NavLink } from 'react-router-dom';
import avatar from '../../images/avatar.jpg'
import NavTab from '../NavTab/NavTab';
function AboutMe(props) {


    return (

        <section className="about-me">
            <NavTab
            name="Студент"/>
            <div className="about-me__container">
                <div className="about-me__main">
                    <h2 className="about-me__name">Николай</h2>
                    <p className="about-me__profession">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__description">Родился и живу в Санкт-Петербурге, работаю инженером.</p>
                    <ul className="about-me__links">
                        <li className="about-me__links-item">
                            <a className="about-me__link" href="https://github.com/nikerfe">Github</a>
                        </li>
                        <li className="about-me__links-item">
                            <a className="about-me__link" href="https://facebook.com">Facebook</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__image" src={avatar}/>
            </div>






        </section>
    )
}

export default AboutMe;