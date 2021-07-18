import React from 'react';
import './Auth.css';
import { Route, NavLink  } from 'react-router-dom';
import Logo from '../Logo/Logo.js';

function Auth(props) {
    const [email, setEmailValue] = React.useState('');
    const [password, setPasswordValue] = React.useState('');
    const [name, setNameValue] = React.useState('');

    function handleChangeEmail(e) {
        setEmailValue(e.target.value);
        console.log(email);
    };

    function handleChangePassword(e) {
        setPasswordValue(e.target.value);
        console.log(password);
    };

    function handleChangeName(e) {
        setNameValue(e.target.value);
        console.log(name);
    };
   
    function handleSubmitRegister(e) {
        e.preventDefault();
        props.onSubmit(name, email, password);
        console.log(email);
        console.log(password);
      }

      function handleSubmitLogin(e) {
        e.preventDefault();
        props.onSubmit(email, password);
        console.log(email);
        console.log(password);
      }
    
    return (
        
        <section className={`auth auth_type_${props.name}`}>
            <div className="auth__container">
            <Logo
            name="auth"/>
            <h2 className="auth__title">{props.title}</h2>
            <Route path="/signup"> 
           
                <form onSubmit={handleSubmitRegister} name={`${props.name}`} action="#" method="POST" className="auth__form" noValidate>
                <label for="name-input" className="auth__label">Имя</label>
                <input onChange={handleChangeName}  value={name} type="text" className="auth__input popup__input_type_name" name="name"
                        id="name-input" minLength="2" maxLength="40" placeholder="Имя" required />
                    <span className="auth__input-error auth__input-error_type_name" id="name-input-error"></span>
                    <label for="email-input" className="auth__label">E-mail</label>
                    <input onChange={handleChangeEmail}  value={email} type="email" className="auth__input popup__input_type_email" name="email"
                        id="email-input" minLength="2" maxLength="40" placeholder="Email" required />
                    <span className="auth__input-error auth__input-error_type_email" id="email-input-error"></span>
                    <label for="password-input" className="auth__label">Пароль</label>
                    <input onChange={handleChangePassword} value={password} type="password" className="auth__input auth__input_type_password" name="password" id="password-input"
                        minLength="8" maxLength="40" placeholder="Пароль" required />
                    <span className="auth__input-error auth__input-error_type_password" id="password-input-error"></span>
                    <button type="submit" className={`auth__submit-button auth__submit-button_type_${props.name}`}>{props.buttonTitle}</button>
                </form>
                <p className="auth__sign">Уже зарегестрированы?<NavLink to="/signin" 
      className="auth__sign-link" activeClassName="auth__sign_active">Войти</NavLink></p>
                </Route> 

                <Route path="/signin"> 
                <form onSubmit={handleSubmitLogin} name={`${props.name}`} action="#" method="POST" className="auth__form" noValidate>
                    <label for="email-input" className="auth__label">E-mail</label>
                    <input onChange={handleChangeEmail}  value={email} type="email" className="auth__input popup__input_type_email" name="email"
                        id="email-input" minLength="2" maxLength="40" placeholder="Email" required />
                    <span className="auth__input-error auth__input-error_type_email" id="email-input-error"></span>
                    <label for="password-input" className="auth__label">Пароль</label>
                    <input onChange={handleChangePassword} value={password} type="password" className="auth__input auth__input_type_password" name="password" id="password-input"
                        minLength="8" maxLength="40" placeholder="Пароль" required />
                    <span className="auth__input-error auth__input-error_type_password" id="password-input-error"></span>
                    <button type="submit" className={`auth__submit-button auth__submit-button_type_${props.name}`}>{props.buttonTitle}</button>
                </form>
                <p className="auth__sign">Еще не зарегестрированы?<NavLink to="/signup" 
      className="auth__sign-link" activeClassName="auth__sign_active">Регистрация</NavLink></p>
                </Route> 
            </div>
        </section>
    )
}

export default Auth;