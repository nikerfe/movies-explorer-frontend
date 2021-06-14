import '../../index.css';
import './App.css';
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
;

function App() {

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


            
            </Switch>
            

          </div>
          </div>

      </>
    </div>
  );
}

export default App;
