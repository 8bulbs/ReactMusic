import React, { Component } from 'react'
import './singerList.css'
import MusicLoading from 'components/MusicLoading/MusicLoading'
export default class SongList extends Component {
  render () {
    return (
      <div className="singer-list-root">
        歌手
        <MusicLoading />
      </div>
    )
  }
}
