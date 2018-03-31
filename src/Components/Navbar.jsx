import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavbarNav,
  NavItem,
  NavLink,
  Fa
} from "mdbreact";

// const NavLink = require('react-router-dom').NavLink;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Navbar color="black" dark expand="md" fixed="top" scrolling>
        {/* <NavbarBrand href="/">Navbar</NavbarBrand> */}
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav className="mr-auto col-md-5" onClick={this.onClick}>
            <NavItem>
              <img src="../pics/mcww-logo.png" className="test" alt="logo" />
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/cart">
                Cart (0)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                className="nav-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSetHbRlMQQALox7nZpgRa-66Vp8_-_Z9Zy05yxT_aU0W75ZJg/viewform?c=0&w=1"
              >
                Apply
              </a>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/donate">
                Donate
              </NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav className="ml-auto col-md-1">
            <NavItem className="">
              <a
                className="nav-link"
                rel="noopener noreferrer"
                href="https://www.facebook.com/MagicCityWoodworks/"
                target="_blank"
              >
                <Fa icon="facebook" />
              </a>
            </NavItem>
            <NavItem className="">
              <a
                className="nav-link"
                rel="noopener noreferrer"
                href="https://instagram.com/magiccitywoodworks/"
                target="_blank"
              >
                <Fa icon="instagram" />
              </a>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}
