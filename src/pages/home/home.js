import React, { Component } from 'react'
import './home.css'
import MusicAppBar from 'components/MusicAppBar/MusicAppBar'
import MusicTab from 'components/MusicTab/MusicTab'
export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <MusicAppBar />
        <MusicTab />
      </div>
    );
  }
}
