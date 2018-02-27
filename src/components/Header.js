import React from 'react';
import Menu from './Menu';
import { getBasePath } from '../libs/basePath';

const Header = ({landingPages}) =>

  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href={getBasePath()}>Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>

        <Menu landingPages={landingPages}></Menu>

      </div>
    </nav>
  </header>

export default Header;
