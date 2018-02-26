import React from 'react';
import '../styles/components/menu.scss'
import { getBasePath } from '../lib/BasePath';

const Menu = ({landingPages}) => {

  if (!landingPages) {
    return ''
  }

  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href={getBasePath()}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={getBasePath() + "pages/about"}>About</a>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
            <ul className="dropdown-menu">
              {
                landingPages.map((link, k) => {
                  return (<li key={k} className="nav-item"><a href={getBasePath() + link.url.alias.substring(1, link.url.alias.length)}>{link.label}</a></li>)
                })
              }
            </ul>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Menu;
