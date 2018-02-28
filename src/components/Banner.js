import React from 'react'
import Loading from './Loading'
import Parser from 'html-react-parser'
import bannerStyles from '../styles/components/banner.scss'

const Banner = ({banner}) => {

  return (
    <header className="masthead" style={{backgroundImage : `url(${(banner.fieldImage) ? banner.fieldImage.url : ''})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-heading">
              <h1>{banner.entityLabel}</h1>
              <h2 className="subheading">{Parser((banner.fieldSubtitle) ? banner.fieldSubtitle.value : '')}</h2>
              <a className="btn btn-primary"  href={banner.fieldCallToAction ? banner.fieldCallToAction.url.alias : ''}>{banner.fieldCallToAction ? banner.fieldCallToAction.title : ''}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Banner;
