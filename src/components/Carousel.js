import React from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'

class Carousel extends React.Component {

  render() {
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
        { this.props.children }
      </Slider>
    )
  }

}

export default connect()(Carousel);