import React from 'react'
import './MusicPlayerMini.css'

export default class MusicPlayerMini extends React.Component {
  render () {
    return (
      <div className="music-player-mini-root">
        <div className="music-player-mini-img-container">
          <img src="" alt="" className="music-player-mini-img"/>
        </div>
        <div className="music-player-mini-text">
        </div>
        <div className="music-player-mini-play">
        </div>
        <div className="music-player-mini-play-list">
        </div>
      </div>
    )
  }
}
