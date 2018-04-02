import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Donate from "./Donate";
import Map from "./Map";
import Shop_Main from "./Shop_Main";
import Nav from "./Navbar";
import FooterPage from "./Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/location" component={Map} />
            <Route exact path="/shop_main" component={Shop_Main} />
          </Switch>
          <FooterPage />
        </Fragment>
      </Router>
    );
  }
}
