import React from 'react';
import './Portfolio.css';
import { Route, NavLink } from 'react-router-dom';
function Portfolio(props) {


    return (

        <section className="portfolio">
            <div className="portfolio__container">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__links">
                    <li className="portfolio__links-item">
                        <a className="portfolio__link" href="https://github.com/nikerfe">Одностраничный сайт</a>
                        <a className="portfolio__link" href="https://github.com/nikerfe"><div className="portfolio__link-icon"></div></a>
                    </li>
                    <li className="portfolio__links-item">
                        <a className="portfolio__link" href="https://github.com/nikerfe">Адаптивный сайт</a>
                        <a className="portfolio__link" href="https://facebook.com"><div className="portfolio__link-icon"></div></a>
                    </li>
                    <li className="portfolio__links-item">
                        <a className="portfolio__link" href="https://github.com/nikerfe">Одностраничное приложение</a>
                        <a className="portfolio__link" href="https://facebook.com"><div className="portfolio__link-icon"></div></a>
                    </li>
                </ul>


            </div>






        </section>
    )
}

export default Portfolio;