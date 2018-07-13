import React, { Component } from 'react'
import MusicCarousel from 'components/MusicCarousel/MusicCarousel'
import MusicSection from 'components/MusicSection/MusicSection'
import SongGridList from 'components/SongGridList/SongGridList'
import './recommend.css'
export default class SongList extends Component {
  render () {
    return (
      <div className="recommend-root">
        <MusicCarousel />
        <MusicSection title="推荐歌单" />
        <SongGridList />
        <MusicSection title="最新音乐"/>
      </div>
    )
  }
}
