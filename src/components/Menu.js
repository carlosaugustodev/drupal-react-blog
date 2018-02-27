import React from 'react';
import '../styles/components/menu.scss'
import { getBasePath } from '../libs/basePath';
import { getLanguage } from '../libs/language';
import { getTranslate } from 'react-localize-redux';
import { connect } from 'react-redux';

const Menu = ({landingPages, t, context}) => {

  const about = {
    "pt" : "pages/sobre",
    "en" : "pages/about-0"
  }
  
  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t("Languages")} <b className="caret"></b></a>
            <ul className="dropdown-menu">
              <li className="nav-item">
                <a className="nav-link" href='/en/'>{t("English")}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/pt/'>{t("Portuguese")}</a>
              </li>
            </ul>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href={getBasePath() + about[getLanguage()]}>{t("About")}</a>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t("Landing pages")} <b className="caret"></b></a>
            <ul className="dropdown-menu">
              { landingPages ? 
                landingPages.map((link, k) => {
                  return (<li key={k} className="nav-item"><a href={"/" + link.url.alias.substring(1, link.url.alias.length)}>{link.label}</a></li>)
                })
                : ""
              }
            </ul>
          </li>

        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    t: getTranslate(state.locale),
    banners : state.BannerReducers.banner,
    articles : state.ArticleReducers.articles,
    page: state.ArticleReducers.page,
    showLoadMore: state.ArticleReducers.showLoadMore
  })
};

export default connect(mapStateToProps)(Menu);
