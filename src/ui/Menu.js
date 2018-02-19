import React from 'react';
import { menuLanding } from '../queries/MenuQueries.js';


const Menu = ({data}) => {

  if (data.loading) {
    return (<div>Loading</div>)
  }

  const links = data.menuByName.links;
  console.log(links);

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
              links.map((link, k) => {
                return (<li key={k} className="nav-item"><a href={link.url.alias}>{link.label}</a></li>)
              })
            }
          </ul>
        </li>

      </ul>
    </div>
  )
}



export default menuLanding(Menu);
