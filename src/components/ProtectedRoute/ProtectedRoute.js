import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
      <Route>
        {() =>
          (props.loggedIn || localStorage.getItem('jwt')) ? <Component {...props} /> : <Redirect to="/signin" />
        }
      </Route>
    );
  };
  
  export default ProtectedRoute;