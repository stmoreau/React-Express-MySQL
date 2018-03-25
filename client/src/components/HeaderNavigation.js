import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.png';

class HeaderNavigation extends Component {
  render() {
    return (
      <Navbar href="/">
        <NavbarBrand>
          <img alt="" src={logo} />
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default HeaderNavigation;
