import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import './NewestSongItem.css'
import bgImg from 'images/icon-spirits.png'
import { connect } from 'react-redux'
import { addToPlayList, audioPlay } from 'reducer/player.redux'

const bgImgPlayStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '166px 97px',
  backgroundPosition: '-24px 0'
}

const bgImgSQStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '166px 97px'
}

@connect(
  state => ({playlist: state.playerReducer}),
  { addToPlayList, audioPlay }
)
export default class NewestSongItem extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick () {
    console.log('clicked')
    console.log(this.props)
    this.props.addToPlayList(this.props.data)
    this.props.audioPlay()
  }

  render () {
    const data =this.props.data
    let singer = data.artists[0].name
    let alias = data.alias[0]
    if (alias) {
      singer += ' - ' + alias
    }
    return (
      <div onClick={() => this.handleClick()} className="newest-song-item-root">
        <ListItem className="newest-song-list-item" button>
          <div className="newest-song-item-content">
            <div className="newest-song-item-name">
              {data.name}
            </div>
            <div className="newest-song-item-singer">
              {data.id%2===0 && <span style={bgImgSQStyle} className="newest-song-item-sq"></span>}
              {singer}
            </div>
          </div>
        </ListItem>
        <div style={bgImgPlayStyle} className="newest-song-item-play">
        </div>
      </div>
    )
  }
}
