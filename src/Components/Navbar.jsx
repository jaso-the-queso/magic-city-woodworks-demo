import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

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
              <NavItem active className="mx-4">
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mx-4">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="dropdown mx-4">
                <NavLink className="nav-link dropbtn" to="/shop_main">
                  Shop
                </NavLink>
                <div className="dropdown-content">
                  <a href="/shop_main">Shop Home</a>
                  <a href="/shop_main/apparel">Apparel</a>
                  <a href="/shop_main/cutting_boards">Cutting Boards</a>
                  <a href="/shop_main/company_gifts">Company Gifts</a>
                  <a href="/shop_main/custom_work">Custom Work</a>
                </div>
              </NavItem>
              <NavItem className="mx-4">
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              </NavItem>
              <NavItem className="mx-4">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem className="dropdown mx-4">
                <NavLink className="nav-link dropbtn" to="/gallery">
                  Gallery
                </NavLink>
                <div className="dropdown-content">
                  <a href="/gallery">Photo Gallery</a>
                  <a href="/video_gallery">Video Gallery</a>
                </div>
              </NavItem>
              <NavItem className="mx-4">
                <a
                  className="nav-link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSetHbRlMQQALox7nZpgRa-66Vp8_-_Z9Zy05yxT_aU0W75ZJg/viewform?c=0&w=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
               </a>
              </NavItem>
              <NavItem className="mx-4">
                <NavLink className="nav-link" to="/donate">
                  Donate
                </NavLink>
              </NavItem>
              {/* <NavItem className="mx-4">
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
              <NavItem className="mx-4">
                <a
                  className="nav-link"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/MagicCityWoodworks/"
                  target="_blank"
                >
                  <Fa icon="facebook" />
                </a>
              </NavItem>
              <NavItem className="mx-4">
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