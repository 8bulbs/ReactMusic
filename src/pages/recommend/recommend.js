import React, { Component } from 'react'
import './recommend.css'
import MusicCarousel from 'components/MusicCarousel/MusicCarousel'
import MusicSection from 'components/MusicSection/MusicSection'
import SongGridList from 'components/SongGridList/SongGridList'
import NewestSongList from 'components/NewestSongList/NewestSongList'
export default class SongList extends Component {
  render () {
    return (
      <div className="recommend-root">
        <MusicCarousel />
        <MusicSection title="推荐歌单" />
        <SongGridList />
        <MusicSection title="最新音乐"/>
        <NewestSongList />
      </div>
    )
  }
}
