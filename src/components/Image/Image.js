import React, { Component } from 'react'

export default class Image extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <div style={{width: this.props.width, height: this.props.height}}>
        <img style={{width: this.props.width, height: this.props.height}} src={require(this.props.src)}/>
      </div>
    )
  }
}


