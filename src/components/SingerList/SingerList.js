import React from 'react'
import './SingerList.css'
import SingerListItem from "components/SingerListItem/SingerListItem";

export default class SingerList extends React.Component {
  render () {
    const data = this.props.data
    return (
      <div className="singer-music-list-container">
        {data.map(v => (
           <SingerListItem key={v.name} data={v}/>
        ))}
      </div>
    )
  }
}
