import React from 'react'
import { getNewestMusic } from 'api/recommend'
import { setLocal, getLocal } from 'libs/util'
import List from '@material-ui/core/List'
import NewestSongItem from 'components/NewestSongItem/NewestSongItem'

export default class NewestSongList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newestMusicData: []
    }
  }

  componentDidMount () {
    let newestMusicData = getLocal('newestMusicData')
    if (newestMusicData) {
      this.setState({newestMusicData})
    } else {
      this._getNewestMusic()
    }
  }

  async _getNewestMusic () {
    let res = await getNewestMusic()
    if (res.data && res.data.code === 200) {
      console.log(res.data)
      let newestMusicData = res.data.recommend
      setLocal('newestMusicData', newestMusicData)
      this.setState({newestMusicData})
    } else {
      console.log(res.data)
    }
  }

  render () {
    return (
      <div className="newest-music-list-root">
        <List>
          {this.state.newestMusicData.map(v => (
            <NewestSongItem key={v.name} data={v}/>
          ))}
        </List>
      </div>
    )
  }
}
