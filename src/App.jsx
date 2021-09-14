import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import ErrorPage from "./components/ErrorPage";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <Route path="/signin" component={Signin} />

          <Route path="/signup" component={Signup} />

          <PrivateRoute path="/dashboard" component={DashBoard} />

          <PrivateRoute path="/class-details/:id" />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
