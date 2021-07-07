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
     
  </Auth>)
}

export default Register