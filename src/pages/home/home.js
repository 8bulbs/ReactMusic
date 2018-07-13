import React, { Component } from 'react'
import './home.css'
import MusicAppBar from 'components/MusicAppBar/MusicAppBar'
import MusicTab from 'components/MusicTab/MusicTab'
import MusicPlayerMini from 'components/MusicPlayerMini/MusicPlayerMini'
import { loginByPhone } from 'api/user'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    // this._loginByPhone()
  }

  async _loginByPhone () {
    let res = await loginByPhone()
    console.log('/login', res)
  }

  render() {
    return (
      <div className="home-root">
        <MusicAppBar />
        <MusicTab/>
        <MusicPlayerMini />
      </div>
    );
  }
}
