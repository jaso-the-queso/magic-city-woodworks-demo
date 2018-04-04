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
import Apparel from "./Apparel";
import Cutting_Boards from "./Cutting_Boards";

import Coasters_Sale from "./Coasters_Sale";
import Juice_Groove_Cutting_Board_Sale from "./Juice_Groove_Cutting_Board_Sale";
import Desk_Organizer_Sale from "./Desk_Organizer_Sale";
import Assorted_Chopping_Block_Sale from "./Assorted_Chopping_Block_Sale";
import Measure_Twice_Tee_Sale from "./Measure_Twice_Tee_Sale";
import Walnut_Chopping_Block_Sale from "./Walnut_Chopping_Block_Sale";
import Oak_Chopping_Block_Sale from "./Oak_Chopping_Block_Sale"

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
            <Route exact path="/shop_main/apparel" component={Apparel} />
            <Route exact path="/shop_main/cutting_boards" component={Cutting_Boards} />
            <Route exact path="/shop_main/coasters_sale" component={Coasters_Sale} />
            <Route exact path="/shop_main/juice_groove_cutting_board_sale" component={Juice_Groove_Cutting_Board_Sale} />
            <Route exact path="/shop_main/desk_organizer_sale" component={Desk_Organizer_Sale} />
            <Route exact path="/shop_main/assorted_chopping_block_sale" component={Assorted_Chopping_Block_Sale} />
            <Route exact path="/shop_main/walnut_chopping_block_sale" component={Walnut_Chopping_Block_Sale} />
            <Route exact path="/shop_main/oak_chopping_block_sale" component={Oak_Chopping_Block_Sale} />
            <Route exact path="/shop_main/measure_twice_tee_sale" component={Measure_Twice_Tee_Sale} />


            {/* <Route exact path="/shop_main/apparel" component={Apparel} />
            <Route exact path="/shop_main/apparel" component={Apparel} /> */}

          </Switch>
          <FooterPage />
        </Fragment>
      </Router>
    );
  }
}
