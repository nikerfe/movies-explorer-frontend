import '../../index.css';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  function handleNavigationOpenClick() { setNavigationOpen(true) };
  function handleNavigationCloseClick() { setNavigationOpen(false) };

  return (
    <div className="App">
      <>

        <div className="page">
          <div className="page__container">


            <Switch>
              <Route path="/signin">
                <Login
                />
              </Route>

              <Route path="/signup">
                <Register
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
