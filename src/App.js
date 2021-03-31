import "./App.css";
import React from "react";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/details/:id" component={Details}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
