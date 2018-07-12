import React from "react";
import Slider from "react-slick";
import './MusicCarousel.css'
import { getBanner } from 'api/recommend.api'
export default class MusicCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bannerData: []
    }
  }

  componentDidMount () {
    this.getBannerList()
  }

  async getBannerList () {
    let res = await getBanner()
    this.setState({
      bannerData: res.data.banners
    })
  }

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
    }
    return (
      <Slider className="carousel-root" {...settings}>
        {this.state.bannerData.map(v =>
          (<div key={v} className="slider-div">
              <img className="slider-img" src={v.picUrl} />
          </div>))
        }
      </Slider>
    )
  }
}
