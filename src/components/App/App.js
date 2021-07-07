import '../../index.css';
import './App.css';
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Navigation from '../Navigation/Navigation.js';
import NotFound from '../NotFound/NotFound';


function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState();
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
              <Route path="/main">
              <Header
              onNavigationOpen={handleNavigationOpenClick}
             
            />
                <Navigation
                isOpen={isNavigationOpen}
                onNavigationClose={handleNavigationCloseClick}/>
             
                <SearchForm />
                <MoviesCardList />
                <Footer />
              </Route>
              <Route path="/profile">
              <Header
            
            />
                <Navigation />
                <Profile />
                <Footer />
              </Route>

              <Route path="/landing">
              <Header
             
            />
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
                <Footer />
              </Route>

              <Route path="/error">
                <NotFound/>
              </Route>
            </Switch>


          </div>
        </div>

      </>
    </div>
  );
}

export default App;
