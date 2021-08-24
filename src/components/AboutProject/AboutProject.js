import React from 'react';
import './AboutProject.css';
import NavTab from '../NavTab/NavTab';
function AboutProject(props) {

    return (

        <section className="about-project">
            <div className="about-project__container">
            <NavTab
            name="О проекте"/>
                <div className="about-project__info">
                    <div className="about-project__info-container">
                        <h2 className="about-project__info-title">Дипломный проект включал 5 этапов</h2>
                        <h2 className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h2>
                    </div>
                    <div className="about-project__info-container">
                        <h2 className="about-project__info-title">На выполнение диплома ушло 5 недель</h2>
                        <h2 className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h2>
                    </div>
                </div>
                <div className="about-project__loading">
                    <div className="about-project__loading-backend">
                        <div className="about-project__loading-container about-project__loading-container_type_backend">
                            <p className="about-project__loading-duration">1 неделя</p>
                        </div>
                        <p className="about-project__loading-title">Back-end</p>
                    </div>
                    <div className="about-project__loading-frontend">
                        <div className="about-project__loading-container about-project__loading-container_type_frontend">
                            <p className="about-project__loading-duration">5 недель</p>
                        </div>
                        <p className="about-project__loading-title">Front-end</p>
                    </div>
                </div>

            </div>






        </section>
    )
}

export default AboutProject;