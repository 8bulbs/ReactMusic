import React from 'react'
import './SongGridListItem.css'
import { playCountFmt } from 'libs/util'
import bgImg from 'images/earphone.svg'

let bgImgStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '10px 11px',
  backgroundPosition: '0% 40%'
}

export default class SongGridListItem extends React.Component {
  render () {
    const data = this.props.data
    return (
      <div className="grid-list-item-root">
        <div className="grid-list-item-img-container">
          <img className="grid-list-item-img" src={data.coverImgUrl} alt=""/>
        </div>
        <p className="grid-list-item-text">
          {data.name}
        </p>
        <div style={bgImgStyle} className="grid-list-item-count">
          {playCountFmt(data.playCount)}
        </div>
      </div>
    )
  }
}
