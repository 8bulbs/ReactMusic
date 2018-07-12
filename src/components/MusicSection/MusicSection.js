import React, { Component } from 'react'
import './MusicSection.css'

export default class MusicSection extends Component {
  render () {
    return (
      <div className="section-root">
        {this.props.title}
      </div>
    )
  }
}
