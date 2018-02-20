import React from 'react'
import Loading from './Loading'
import Slider from 'react-slick'
import Parser from 'html-react-parser'

const Banner = (banner) => {

  if (!banner) {
    return <Loading/>
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };

  return (
    <Slider {...settings}>
      {
        Object.keys(banner).map(
          key =>
            (
              <header key={key} className="masthead" style={{backgroundImage : `url(${(banner[key].fieldImage) ? banner[key].fieldImage.url : ''})`}}>
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                      <div className="post-heading">
                        <h1>{banner[key].entityLabel}</h1>
                        <h2 className="subheading">{Parser((banner[key].fieldSubtitle) ? banner[key].fieldSubtitle.value : '')}</h2>
                        <a className="btn btn-primary"  href={banner[key].fieldCallToAction ? banner[key].fieldCallToAction.uri : ''}>{banner[key].fieldCallToAction ? banner[key].fieldCallToAction.title : ''}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            )
        )
      }
    </Slider>
  )
}
export default Banner;
