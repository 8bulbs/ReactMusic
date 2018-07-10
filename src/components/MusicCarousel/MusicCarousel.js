import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './MusicCarousel.styl'

export default class MusicCarousel extends Component {
    render() {
        return (
            <Carousel
             width="375px"
             infiniteLoop={true}
             showArrows={true}
            >
                <div>
                    <img src="http://p1.music.126.net/bWK5Rvx_yPeo0ZP0ZeNiwg==/109951163400755976.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://p1.music.126.net/Yw8_oWn1CiOWqcpRTkEzZw==/109951163399777585.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://p1.music.126.net/kb_JSB1UJe62EXBuk80HRg==/109951163397825260.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
