import React from 'react'
import './music-tab.css'
import ListItem from '@material-ui/core/ListItem'

export default class MusicTab extends React.Component {
  render () {
    return (
      <div className="music-tab-root">
        <ListItem className="music-tab-item">
          推荐
        </ListItem>
        <ListItem className="music-tab-item">
          歌单
        </ListItem>
        <ListItem className="music-tab-item">
          歌曲
        </ListItem>
        <ListItem className="music-tab-item">
          搜索
        </ListItem>
      </div>
    )
  }
}

