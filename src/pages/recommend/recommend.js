import React, { Component } from 'react'
import MusicCarousel from 'components/MusicCarousel/MusicCarousel'
import MusicSection from 'components/MusicSection/MusicSection'
export default class SongList extends Component {
  render () {
    return (
      <div>
        <MusicCarousel />
        <MusicSection />
      </div>
    )
  }
}
