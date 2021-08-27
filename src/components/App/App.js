import '../../index.css';
import './App.css';
import api from '../../utils/MainApi.js';
import * as moviesApi from '../../utils/MoviesApi';
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';


function App() {
  const history = useHistory();
  const location = useLocation().pathname;
  const savedMoviesRoute = (location === "/saved-movies") ? true : false;
  const [currentUser, setCurrentUser] = React.useState({});
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [savedMovie, setSavedMovie] = React.useState([]);
  const [checkboxShortMovies, setCheckboxShortMovies] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);

  function handleNavigationOpenClick() { 
    setNavigationOpen(true) 
  };

  function handleNavigationCloseClick() { 
    setNavigationOpen(false) 
  };

  function closeAllPopups() {
    setInfoTooltipOpen(false);
  }

  function handleShortMovies(e) {
    setCheckboxShortMovies(e.target.checked);
    console.log(checkboxShortMovies)
    let savedMovies = JSON.parse(localStorage.getItem("SavedMovies"));
      if (savedMovies.length !== 0) {
        const filteredSavedMovies = filterShortMovie(savedMovies)
        localStorage.setItem('SearchedSavedMovies', JSON.stringify(filteredSavedMovies));
        const searchedSavedMovies = JSON.parse(localStorage.getItem('SearchedSavedMovies'));
        setSavedMovie(searchedSavedMovies);
        setIsLoading(false);
      } else {
        setNotFound(true);
        setSavedMovie([]);  
        setIsLoading(false);
      }
  }

  function handleRegister(name, email, password) {
    api.register(name, email, password).then((res) => {
      if (res) {
        setIsSucceed(true)
        setInfoTooltipOpen(true);
        history.push('/signin');
      } else {
        console.log("Ошибка при регистрации")
      }
    }).catch((err) => {
      const errorCode = err.replace(/[^0-9]/g, '')
      if (errorCode === '400') {
        setErrorMessage('Введены некоректные значения');
      }
      else if (errorCode === '409') {
        setErrorMessage('Пользователь с таким email уже существует');
      }
      else {
        setErrorMessage('Что-то пошло не так, попробуйте ещё раз');
      }
      setIsSucceed(false);
      setInfoTooltipOpen(true);
    })
  }

  function handleLogin(email, password) {
    api.login(email, password).then((res) => {
      if (res) {
        localStorage.setItem('jwt', res.token);
        tokenCheck()
      } else {
        console.log("Ошибка при авторизации")
      }
    })
      .catch((err) => {
        const errorCode = err.replace(/[^0-9]/g, '')
        if (errorCode === '401') {
          setErrorMessage('Неправильные почта или пароль');
        }
        else if (errorCode === '404') {
          setErrorMessage('Запрашиваемый пользователь не найден');
        }
        else {
          setErrorMessage('Что-то пошло не так, попробуйте ещё раз');
        }
        setIsSucceed(false);
        setInfoTooltipOpen(true);
      })
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getToken()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => console.log(err))
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
  }

  function SearchMovies(movies, searchText) {
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchText.toLowerCase()))
  }

  function filterShortMovie(movies) {
    if (checkboxShortMovies === true) {
      const filteredMovies = movies.filter((item) => {
        return item.duration < 40
      });
      return filteredMovies
    } else {
      return movies
    }
  }
  

  const handleShowMovies = (searchText) => {
    setNotFound(false);
    setError(false);
    setIsLoading(true);
    if (!savedMoviesRoute) {
      if (allMovies.length === 0) {
        moviesApi.getMovies()
          .then((movies) => {
            localStorage.setItem('Movies', JSON.stringify(movies));
            const allMovies = JSON.parse(localStorage.getItem('Movies'));
            setAllMovies(allMovies);
            const searchMoviesResult = SearchMovies(allMovies, searchText)
            localStorage.setItem('SearchedMovies', JSON.stringify(searchMoviesResult));
            const searchedMovies = JSON.parse(localStorage.getItem('SearchedMovies'));
            setMovies(searchedMovies);
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => {
            setIsLoading(false);
          })
      }
      else {
        const searchMoviesResult = SearchMovies(allMovies, searchText)
        if (searchMoviesResult.length !== 0) {
          const filteredMovies = filterShortMovie(searchMoviesResult)
          localStorage.setItem('SearchedMovies', JSON.stringify(filteredMovies));
          const searchedMovies = JSON.parse(localStorage.getItem('SearchedMovies'));
          setMovies(searchedMovies);
          setIsLoading(false);
        } else {
          setNotFound(true);
          setMovies([]);
          setIsLoading(false);
        }
      }
    } else {
      let savedMovies = JSON.parse(localStorage.getItem("SavedMovies"));
      const searchSavedMoviesResult = SearchMovies(savedMovies, searchText)
      if (searchSavedMoviesResult.length !== 0) {
        const filteredSavedMovies = filterShortMovie(searchSavedMoviesResult)
        localStorage.setItem('SearchedSavedMovies', JSON.stringify(filteredSavedMovies));
        const searchedSavedMovies = JSON.parse(localStorage.getItem('SearchedSavedMovies'));
        setSavedMovie(searchedSavedMovies);
        setIsLoading(false);
      } else {
        setNotFound(true);
        setSavedMovie([]);  
        setIsLoading(false);
      }
    }
  }

  function handleSavedMovie(movie) {
    setNotFound(false);
    api.savedMovie(movie)
      .then((data) => {
        console.log(data)
        const savedMovies = [...savedMovie, data];
        localStorage.setItem('SavedMovies', JSON.stringify(savedMovies));
        setSavedMovie(savedMovies);
        console.log(savedMovie);
      })
      .catch(err => console.log(err))
  }

  function handleDeleteMovie(movieId) {
    api.deleteSavedMovie(movieId)
      .then((res) => {
        const updateSavedMovies = savedMovie.filter((item) => {
          return item._id !== movieId
        });
        setSavedMovie(updateSavedMovies);
        localStorage.setItem('SavedMovies', JSON.stringify(updateSavedMovies));

      })
      .catch(err => console.log(err));
  }

  function handleEditUserProfile(value) {
    api.editUserProfile(value)
      .then((data) => {
        console.log(data)
        setCurrentUser(data);
        setIsSucceed(true)
        setInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    if (localStorage.getItem('Movies')) {
      setAllMovies(JSON.parse(localStorage.getItem('Movies')));
    }
  }, []);

  React.useEffect(() => {
    tokenCheck();
  }, [])

  React.useEffect(() => {
    setNotFound(false)
    setError(false)
  }, [location])

  React.useEffect(() => {
    if (isLoggedIn) {
      api.getSavedMovies()
        .then((res) => {
          setSavedMovie(res);
          console.log(savedMovie)
        })
        .catch(err => console.log(err));

    }
  }, [location])

  return (
    < CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <>
          <div className="page">
            <div className="page__container">
              <Switch>
              <Route exact path="/">
                  <Main
                  />
                </Route>

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

                <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
                  <Header
                    onNavigationOpen={handleNavigationOpenClick} />
                  <Navigation
                    isOpen={isNavigationOpen}
                    onNavigationClose={handleNavigationCloseClick} />
                  <Movies
                    onShowMovies={handleShowMovies}
                    onSavedMovie={handleSavedMovie}
                    onDeleteMovie={handleDeleteMovie}
                    isShortMovies={checkboxShortMovies}
                    handleShortMovies={handleShortMovies}
                    error={error}
                    notFound={notFound}
                    movies={movies}
                    savedMovies={savedMovie}
                    isLoading={isLoading}
                  />
                </ProtectedRoute>

                <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
                  <Header
                    onNavigationOpen={handleNavigationOpenClick} />
                  <Navigation
                    isOpen={isNavigationOpen}
                    onNavigationClose={handleNavigationCloseClick} />
                  <SavedMovies
                    movies={savedMovie}
                    onDeleteMovie={handleDeleteMovie}
                    isSaved={true}
                    onShowMovies={handleShowMovies}
                    isShortMovies={checkboxShortMovies}
                    handleShortMovies={handleShortMovies}
                    error={error}
                    notFound={notFound}
                    isLoading={isLoading}
                  />
                </ProtectedRoute>

                <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                  <Header
                    onNavigationOpen={handleNavigationOpenClick} />
                  <Navigation
                    isOpen={isNavigationOpen}
                    onNavigationClose={handleNavigationCloseClick} />
                  <Profile
                    onEditUserProfile={handleEditUserProfile}
                    onLogout={handleLogout}
                  />
                </ProtectedRoute>

                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Footer />
              <InfoTooltip
                isSucceed={isSucceed}
                isOpen={isInfoTooltipOpen}
                onClose={closeAllPopups}
                errorMessage={errorMessage}
              />
            </div>
          </div>

        </>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
