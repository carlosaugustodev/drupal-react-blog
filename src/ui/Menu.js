import React from 'react';
import Loading from '../ui/Loading';

const Menu = ({landingPages}) => {

  if (!landingPages) {
    return ''
  }

  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="dropdown nav-item">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
          <ul className="dropdown-menu">
            {
              landingPages.map((link, k) => {
                return (<li key={k} className="nav-item"><a href={link.url.alias}>{link.label}</a></li>)
              })
            }
          </ul>
        </li>

      </ul>
    </div>
  )
}

export default Menu;
