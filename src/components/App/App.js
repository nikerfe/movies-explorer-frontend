import '../../index.css';
import './App.css';
import api from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation.js';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  const history = useHistory();
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  function handleNavigationOpenClick() { setNavigationOpen(true) };
  function handleNavigationCloseClick() { setNavigationOpen(false) };
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);


  function handleRegister(name, email, password) {
    api.register(name, email, password).then((res) => {
      if (res) {
        setIsSucceed(true)
        /*setInfoTooltipOpen(true);*/
        history.push('/signin');
      } else {
        console.log("erorr")
      }
    }).catch((err) => {
      console.log(email)
      console.log(password)
      console.log(name)
      setIsSucceed(false);
      /*setInfoTooltipOpen(true);*/
      console.log(err);
    })
  }

  function handleLogin(email, password) {
    api.login(email, password).then((res) => {
      if (res) {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      } else {
        console.log("erorr")
      }
    }).catch((err) => console.log(err));
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => console.log(err));
    }
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  
  /*const getMovies = () => {
    moviesApi.getMovies
      .then((res) => {
        return res.map((movie) => {
          return {
            id: movie.id,
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${movie.image === null 
              ? ""
              : `https://api.nomoreparties.co${movie.image?.url}`}`,
            trailer: movie.trailerLink,
            thumbnail: !movie.image
              ? ""
              : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id || "",
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
        });
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("baseMovies", JSON.stringify(res));
        }
      })
      .catch((err) => console.log(err))
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      getMovies();
      const lastSeachedMovies = JSON.parse(
        localStorage.getItem("searchResult")
      );
    }
  }, [isLoggedIn]);*/


  return (
    <div className="App">
      <>

        <div className="page">
          <div className="page__container">


            <Switch>
              <Route path="/signin">
                <Login
                onLogin={handleLogin}
                />
              </Route>

              <Route path="/signup">
                <Register
                 onRegister={handleRegister}
                />
              </Route>

              <Route path="/movies">
                <Header
                  onNavigationOpen={handleNavigationOpenClick} />
                <Navigation
                  isOpen={isNavigationOpen}
                  onNavigationClose={handleNavigationCloseClick} />
                <Movies />
              </Route>

              <Route path="/savedmovies">
                <Header
                  onNavigationOpen={handleNavigationOpenClick} />
                <Navigation
                  isOpen={isNavigationOpen}
                  onNavigationClose={handleNavigationCloseClick} />
                <SavedMovies />
              </Route>

              <Route path="/profile">
                <Header
                  onNavigationOpen={handleNavigationOpenClick} />
                <Navigation
                  isOpen={isNavigationOpen}
                  onNavigationClose={handleNavigationCloseClick} />
                <Profile />
              </Route>

              <Route path="/main">
                <Main />
              </Route>

              <Route path="/error">
                <NotFound />
              </Route>
            </Switch>
            <Footer />

          </div>
        </div>

      </>
    </div>
  );
}

export default App;
