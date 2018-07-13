import React from "react"
import Slider from "react-slick"
import './MusicCarousel.css'
import { getBanner } from 'api/recommend'
import { setLocal, getLocal } from 'libs/util'
export default class MusicCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bannerData: []
    }
  }

  componentDidMount () {
    let bannerData = getLocal('bannerData')
    if (bannerData) {
      this.setState({
        bannerData
      })
    } else {
      this.getBannerList()
    }
  }

  async getBannerList () {
    let res = await getBanner()
    let bannerData = res.data.banners
    setLocal('bannerData', bannerData)
    this.setState({
      bannerData
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
          (<div key={v.picUrl} className="slider-div">
              <img className="slider-img" src={v.picUrl} />
          </div>))
        }
      </Slider>
    )
  }
}
