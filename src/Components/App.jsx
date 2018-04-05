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
import Company_Gifts from "./Company_Gifts";
import Custom_Work from "./Custom_Work";

import Coasters_Sale from "./Coasters_Sale";
import Juice_Groove_Cutting_Board_Sale from "./Juice_Groove_Cutting_Board_Sale";
import Desk_Organizer_Sale from "./Desk_Organizer_Sale";
import Assorted_Chopping_Block_Sale from "./Assorted_Chopping_Block_Sale";
import Measure_Twice_Tee_Sale from "./Measure_Twice_Tee_Sale";
import Walnut_Chopping_Block_Sale from "./Walnut_Chopping_Block_Sale";
import Oak_Chopping_Block_Sale from "./Oak_Chopping_Block_Sale";
import Magic_City_Tee_Grey_Navy_Sale from "./Magic_City_Tee_Grey_Navy_Sale";
import Classic_Tee_Oatmeal_Sale from "./Classic_Tee_Oatmeal_Sale";
import Magic_City_Tee_Grey_Sale from "./Magic_City_Tee_Grey_Sale";
import Magic_City_Tee_Navy_Sale from "./Magic_City_Tee_Navy_Sale";
import Classic_Tee_Navy_Sale from "./Classic_Tee_Navy_Sale";
import Sweatshirt_Dark_Sale from "./Sweatshirt_Dark_Sale";
import Sweatshirt_Light_Sale from "./Sweatshirt_Light_Sale";
import Patch_Sale from "./Patch_Sale";

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
            <Route exact path="/shop_main/company_gifts" component={Company_Gifts} />
            <Route exact path="/shop_main/custom_work" component={Custom_Work} />

            <Route exact path="/shop_main/coasters_sale" component={Coasters_Sale} />
            <Route exact path="/shop_main/juice_groove_cutting_board_sale" component={Juice_Groove_Cutting_Board_Sale} />
            <Route exact path="/shop_main/desk_organizer_sale" component={Desk_Organizer_Sale} />
            <Route exact path="/shop_main/assorted_chopping_block_sale" component={Assorted_Chopping_Block_Sale} />
            <Route exact path="/shop_main/walnut_chopping_block_sale" component={Walnut_Chopping_Block_Sale} />
            <Route exact path="/shop_main/oak_chopping_block_sale" component={Oak_Chopping_Block_Sale} />
            <Route exact path="/shop_main/measure_twice_tee_sale" component={Measure_Twice_Tee_Sale} />
            <Route exact path="/shop_main/magic_city_tee_grey_navy_sale" component={Magic_City_Tee_Grey_Navy_Sale} />
            <Route exact path="/shop_main/classic_tee_oatmeal_sale" component={Classic_Tee_Oatmeal_Sale} />
            <Route exact path="/shop_main/magic_city_tee_grey_sale" component={Magic_City_Tee_Grey_Sale} />
            <Route exact path="/shop_main/magic_city_tee_navy_sale" component={Magic_City_Tee_Navy_Sale} />
            <Route exact path="/shop_main/classic_tee_navy_sale" component={Classic_Tee_Navy_Sale} />
            <Route exact path="/shop_main/sweatshirt_dark_sale" component={Sweatshirt_Dark_Sale} />
            <Route exact path="/shop_main/sweatshirt_light_sale" component={Sweatshirt_Light_Sale} />
            <Route exact path="/shop_main/patch_sale" component={Patch_Sale} />

          </Switch>
          <FooterPage />
        </Fragment>
      </Router>
    );
  }
}
