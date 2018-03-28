import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavbarNav, NavItem, NavLink, Fa } from 'mdbreact';


// const NavLink = require('react-router-dom').NavLink;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state ={
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
        <Navbar color="black" dark expand="md" fixed="top" scrolling>
        {/* <NavbarBrand href="/">Navbar</NavbarBrand> */}
        {!this.state.isWideEnough && <NavbarToggler onClick ={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav className="mr-auto col-md-5" onClick={this.onClick}>
            <NavItem>
              <img src="../pics/dickbutt.png" className="test" />
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/cart">Cart (0)</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/apply">Apply</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/donate">Donate</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav className="ml-auto col-md-1">
            {/* <div className="row"> */}
            <NavItem className="">
              <NavLink className="nav-link" to="https://facebook.com/"><Fa icon="facebook" /></NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink className="nav-link" to="https://instagram.com/"><Fa icon="instagram" /></NavLink>
            </NavItem>
            {/* </div> */}
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}
                