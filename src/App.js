import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Contex/AuthProvider/AuthProvider";
import PrivetRoute from "./Contex/PrivetRoute/PrivetRoute";
import Regi from "./Pages/Regi/Regi";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/regi">
              <Regi></Regi>
            </Route>
            <PrivetRoute path="/booking">
              <Booking></Booking>
            </PrivetRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
