import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Background from "./components/Background.style";

//pages
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Background>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={Forecast} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </BrowserRouter>
      </Background>
    );
  }
}

export default App;
