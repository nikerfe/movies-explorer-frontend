import Auth from '../Auth/Auth.js';
import './Register.css';
import { NavLink } from 'react-router-dom';

function Register(props) {
  function handleSubmit (name, password, email) {
      props.onRegister(name, password, email); 
  }
  return (<Auth
    title="Добро пожаловать!"
    name="signup"
    buttonTitle="Зарегистрироваться"
    onSubmit={handleSubmit}
  >
      <p className="auth__sign-in auth__sign-in_type_main">Уже зарегистрированы?<NavLink to="/signin" className="auth__sign-in auth__sign-in_type_main" activeClassName="auth__sign-in_active"> Войти</NavLink></p>
  </Auth>)
}

export default Register