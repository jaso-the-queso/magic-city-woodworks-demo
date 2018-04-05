import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from 'mdbreact';

export default class NavbarFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="br-black" dark expand="lg" fixed="top" scrolling>
          <NavbarBrand href="/">
            <img src="../pics/mcww-logo.png" className="test" alt="logo" />
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/shop_main">
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/cart">
                  Cart
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
                  target="_blank"
                >
                  Apply
               </a>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/donate">
                  Donate
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another Action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem> */}
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <a
                  className="nav-link"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/MagicCityWoodworks/"
                  target="_blank"
                >
                  <Fa icon="facebook" />
                </a>
              </NavItem>
              <NavItem>
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
      </div>
    );
  }
}