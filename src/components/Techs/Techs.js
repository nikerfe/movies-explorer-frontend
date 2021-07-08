import React from 'react';
import './Techs.css';
import { Route, NavLink } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
function Techs(props) {


    return (

        <section className="techs">
             <NavTab
                name="Технологии"
                section="techs"/>
            <div className="techs__container">
               
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <ul className="techs__list">
                    <li className="techs__item">
                        <div className="techs__skill">HTML</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">CSS</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">JS</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">React</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">Git</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">Express.js</div>
                    </li>
                    <li className="techs__item">
                        <div className="techs__skill">mongoDB</div>
                    </li>
                </ul>


            </div>






        </section>
    )
}

export default Techs;