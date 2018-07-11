import React from "react";
import Slider from "react-slick";
import './MusicCarousel.css'
export default class MusicCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      autoplay:true,
      className: 'slider-div',
      // dotsClass: 'dots'
    };
    return (
      <Slider {...settings}>
        <div className="slider-div">
            <img className="slider-img" src="http://p1.music.126.net/bWK5Rvx_yPeo0ZP0ZeNiwg==/109951163400755976.jpg" />
        </div>
        <div className="slider-div">
            <img className="slider-img" src="http://p1.music.126.net/Yw8_oWn1CiOWqcpRTkEzZw==/109951163399777585.jpg" />
        </div>
        <div className="slider-div">
            <img className="slider-img" src="http://p1.music.126.net/kb_JSB1UJe62EXBuk80HRg==/109951163397825260.jpg" />
        </div>
      </Slider>
    )
  }
}
