import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Admin from './Components/AdminPanel/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Customer from './Components/CustomerPanel/Customer/Customer';



export const userCreate = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [addCart, setAddCart] = useState([]);
  console.log(addCart)
  console.log(loggedInUser)
  return (
    <userCreate.Provider value={[loggedInUser, setLoggedInUser, addCart, setAddCart]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/customer">
            <Customer></Customer>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userCreate.Provider>
  );
}

export default App;
