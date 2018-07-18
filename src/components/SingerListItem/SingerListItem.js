import React from 'react'
import './SingerListItem.css'


export default class SingerListItem extends React.Component {
  render () {
    const data = this.props.data
    console.log(data);
    return (
      <div className="singer-item-container">
        <img src={data.picUrl} alt={data.name} />
        <p>
          <a href="#">
            {data.name}
          </a>
        </p>
      </div>
    )
  }

}
