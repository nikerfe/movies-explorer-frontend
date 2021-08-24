import React from 'react';
import './Auth.css';
import { Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import { useFormWithValidation } from '../../utils/validation.js';

function Auth(props) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const { email, password, name } = values;

    function handleSubmitRegister(e) {
        e.preventDefault();
        props.onSubmit(name, email, password);
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        props.onSubmit(email, password);
    }

    return (

        <section className={`auth auth_type_${props.name}`}>
            <div className="auth__container">
                <Logo
                    name="auth" />
                <h2 className="auth__title">{props.title}</h2>
                <Route path="/signup">

                    <form onSubmit={handleSubmitRegister} name={`${props.name}`} action="#" method="POST" className="auth__form">
                        <label for="name-input" className="auth__label">Имя</label>
                        <input
                            onChange={handleChange}
                            value={name}
                            type="text"
                            className="auth__input popup__input_type_name"
                            name="name"
                            id="name-input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Имя"
                            required />
                        <span className="auth__input-error auth__input-error_type_name" id="name-input-error">{errors.name}</span>
                        <label for="email-input" className="auth__label">E-mail</label>
                        <input
                            onChange={handleChange}
                            value={email}
                            type="email"
                            className="auth__input popup__input_type_email"
                            name="email"
                            id="email-input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Email"
                            required />
                        <span className="auth__input-error auth__input-error_type_email" id="email-input-error">{errors.email}</span>
                        <label for="password-input" className="auth__label">Пароль</label>
                        <input
                            onChange={handleChange}
                            value={password}
                            type="password"
                            className="auth__input auth__input_type_password"
                            name="password"
                            id="password-input"
                            minLength="8"
                            maxLength="40"
                            placeholder="Пароль"
                            required />
                        <span className="auth__input-error auth__input-error_type_password" id="password-input-error">{errors.password}</span>
                        <span className="auth__submit-error">{props.errorMessage}</span>
                        <button type="submit" className={`${isValid ? `auth__submit-button auth__submit-button_type_${props.name}` : `auth__submit-button auth__submit-button_disabled auth__submit-button_type_${props.name}`}`}>{props.buttonTitle}</button>
                    </form>
                    <p className="auth__sign">Уже зарегестрированы?<NavLink to="/signin"
                        className="auth__sign-link" activeClassName="auth__sign_active">Войти</NavLink></p>
                </Route>

                <Route path="/signin">
                    <form onSubmit={handleSubmitLogin} name={`${props.name}`} action="#" method="POST" className="auth__form">
                        <label for="email-input" className="auth__label">E-mail</label>
                        <input
                            onChange={handleChange}
                            value={email} type="email"
                            className="auth__input popup__input_type_email"
                            name="email"
                            id="email-input"
                            minLength="2"
                            maxLength="40"
                            placeholder="Email"
                            required />
                        <span className="auth__input-error auth__input-error_type_email" id="email-input-error">{errors.email}</span>
                        <label for="password-input" className="auth__label">Пароль</label>
                        <input
                            onChange={handleChange}
                            value={password} type="password"
                            className="auth__input auth__input_type_password"
                            name="password" id="password-input"
                            minLength="8"
                            maxLength="40"
                            placeholder="Пароль"
                            required />
                        <span className="auth__input-error auth__input-error_type_password" id="password-input-error">{errors.password}</span>

                        <button type="submit" className={`${isValid ? `auth__submit-button auth__submit-button_type_${props.name}` : `auth__submit-button auth__submit-button_disabled auth__submit-button_type_${props.name}`}`}>{props.buttonTitle}</button>
                    </form>
                    <p className="auth__sign">Еще не зарегестрированы?<NavLink to="/signup"
                        className="auth__sign-link" activeClassName="auth__sign_active">Регистрация</NavLink></p>
                </Route>
            </div>
        </section>
    )
}

export default Auth;