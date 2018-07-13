import React from 'react'
import { getRecommendSongList } from 'api/recommend'
import SongGridListItem from 'components/SongGridListItem/SongGridListItem'
import './SongGridList.css'
import { setLocal, getLocal } from 'libs/util'

export default class SongGridList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recommendSongListData: []
    }
  }

  // 组件挂载后获取数据
  componentDidMount () {
    let recommendSongListData = getLocal('recommendSongListData')
    if (recommendSongListData) {
      console.log('recommendSongListData', recommendSongListData)
      this.setState({
        recommendSongListData
      })
    } else {
      this._getRecommendSongList()
    }
  }

  async _getRecommendSongList () {
    let res = await getRecommendSongList()
    if (res.data && res.data.code === 200) {
      let recommendSongListData = res.data.playlists
      setLocal('recommendSongListData', recommendSongListData)
      this.setState({
        recommendSongListData
      })
    }
  }

  render () {
    return (
      <div className="song-grid-list-root">
        {this.state.recommendSongListData.map((v) =>
        <SongGridListItem key={v.name} data={v} />)}
      </div>
    )
  }
}
