import React from 'react'
import './music-header.css'
import bgImg from 'images/doudou-app-bar.png'

const style = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '15% 50%'
}

export default class MusicHeader extends React.Component {
  render () {
    return (
      <div className="header-root">
        <div style={style} className="title">
          React Music
        </div>
      </div>
    )
  }
}
