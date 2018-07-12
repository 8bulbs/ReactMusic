import React, { Component } from 'react'
import MusicCarousel from 'components/MusicCarousel/MusicCarousel'
import MusicSection from 'components/MusicSection/MusicSection'
export default class SongList extends Component {
  render () {
    return (
      <div>
        <MusicCarousel />
        <MusicSection title="推荐歌单" />
        <MusicSection title="最新音乐"/>
      </div>
    )
  }
}
