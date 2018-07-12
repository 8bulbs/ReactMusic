import React, { Component } from 'react'
import './search.css'
import MusicLoading from 'components/MusicLoading/MusicLoading'
export default class SongList extends Component {
  render () {
    return (
      <div className="search-root">
        搜索
        <MusicLoading />
      </div>
    )
  }
}
