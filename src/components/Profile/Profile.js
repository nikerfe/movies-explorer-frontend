import React from 'react';
import './Profile.css';
import { Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Profile(props) {


    return (

        <section className="profile">
            <div className="profile__container">

                <h2 className="profile__title">Привет, Николай!</h2>

                <form name="profile" action="#" method="POST" className="profile__form" noValidate>
                    <div className="profile__input-container">
                        <label for="profile-name-input" className="profile__label">Имя</label>
                        <input type="text" className="profile__input profile__input_type_name" name="name"
                            id="name-input" minLength="2" maxLength="40" placeholder="Имя" required />
                    </div>

                    <div className="profile__input-container">
                        <label for="email-input" className="profile__label">E-mail</label>
                        <input type="email" className="profile__input profile__input_type_email" name="email"
                            id="profile-email-input" minLength="2" maxLength="40" placeholder="Email" required />
                    </div>


                </form>

                <button type="submit" className="profile__button">Редактировать</button>
                <NavLink className="profile__logout" activeClassName="profile__lougout_active" to="/signin">Выйти из аккаунта</NavLink>

            </div>
        </section>
    )
}

export default Profile;