import Auth from '../Auth/Auth.js';

function Login(props) {
  function handleSubmit(email, password) {
    props.onLogin(email, password)
  }
  return (<Auth
    title="Рады видеть!"
    name="signin"
    buttonTitle="Войти"
    onSubmit={handleSubmit}
  >
  </Auth>)
}

export default Login