import Auth from '../Auth/Auth.js';
import './Register.css';

function Register(props) {
  function handleSubmit(name, password, email) {
    props.onRegister(name, password, email);
  }
  return (<Auth
    title="Добро пожаловать!"
    name="signup"
    buttonTitle="Зарегистрироваться"
    onSubmit={handleSubmit}
    errorMessage={props.errorMessage}
  >

  </Auth>)
}

export default Register