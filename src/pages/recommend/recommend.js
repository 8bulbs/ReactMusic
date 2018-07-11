import React, { Component } from 'react'
import MusicCarousel from 'components/MusicCarousel/MusicCarousel'
export default class SongList extends Component {
  render () {
    return (
      <div>
        {/* 推荐 */}
        <MusicCarousel />
      </div>
    )
  }
}
