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
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSucceed, setIsSucceed] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [savedMovie, setSavedMovie] = React.useState([]);
  const [token, setToken] = React.useState(false);
  

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
        setToken(localStorage.getItem('jwt'));
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


  function SearchMovies(movies, searchText) {
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchText.toLowerCase()))
  }

  const handleShowMovies = (searchText) => {
    setIsLoading(true);
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
        .finally(() => {
          setIsLoading(false);
        })
    }
    else {
      const searchMoviesResult = SearchMovies(allMovies, searchText)
      localStorage.setItem('SearchedMovies', JSON.stringify(searchMoviesResult));
      const searchedMovies = JSON.parse(localStorage.getItem('SearchedMovies'));
      setMovies(searchedMovies);
      setIsLoading(false);
    }
  }


  React.useEffect(() => {
    if (localStorage.getItem('Movies')) {
      setAllMovies(JSON.parse(localStorage.getItem('Movies')));
    }
  }, []);


  function handleSavedMovie(movie) {
    api.savedMovie(movie)
    .then((data) => {
      console.log(data)
      const savedMovies = [...savedMovie, data];
      localStorage.setItem('SavedMovies', JSON.stringify(savedMovies));
      setSavedMovie(savedMovies);
      console.log(savedMovie);
    })
    .catch(err => console.log(`Error: ${err}`))
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
      .catch(err => console.log(`Error: ${err}`));
    }

  React.useEffect(() => {
    if(isLoggedIn) {
    api.getSavedMovies()
      .then((res) => {
        setSavedMovie(res);
        console.log(savedMovie)
      })
      .catch(err => console.log(err));
      
    }
  }, [isLoggedIn])

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
                <Movies
                  onShowMovies={handleShowMovies}
                  onSavedMovie={handleSavedMovie}
 


                  movies={movies}
                />
              </Route>

              <Route path="/savedmovies">
                <Header
                  onNavigationOpen={handleNavigationOpenClick} />
                <Navigation
                  isOpen={isNavigationOpen}
                  onNavigationClose={handleNavigationCloseClick} />
                <SavedMovies 
                movies={savedMovie}
                onDeleteMovie={handleDeleteMovie}
                isSaved={true}
                />
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
                <Main

                />
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
