import React, { Component } from 'react'
import './singerList.css'
import MusicLoading from 'components/MusicLoading/MusicLoading'
import SingerList from 'components/SingerList/SingerList'
import MusicSection from 'components/MusicSection/MusicSection'
import { getLocal, setLocal } from "libs/util"
import { getHotSinger } from 'api/singerList'
import { getRecommendSinger } from 'api/singerList'
import { getSingerToplist } from 'api/singerList'

export default class SongList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotSingerData : [],
      recommendSingerData : [],
      singerTopListData : []
    }
  }

  componentDidMount () {
    let hotSingerData = getLocal('hotSingerData')
    let recommendSingerData = getLocal('recommendSingerData')
    let singerTopListData = getLocal('singerTopListData')
    let array = [
      {
        data: hotSingerData,
        dataName: 'hotSingerData',
        fn: getHotSinger,
        localName: 'hotSingerData'
      },
      {
        data: recommendSingerData,
        dataName: 'recommendSingerData',
        fn: getRecommendSinger,
        localName: 'recommendSingerData'
      },
      {
        data: singerTopListData,
        dataName : 'singerTopListData',
        fn: getSingerToplist,
        localName: 'singerTopListData'
      }
    ];
    array.map(item => {
      if (item.data) {
        var obj = {}
        var dataName = item.dataName
        var data = item.data 
        obj[dataName] = data
        this.setState(obj)
      }
      else {
        console.log(item.dataName)
        this.getData(item.fn, item.dataName, item.localName)
      }
    })
  }

  async getData (fn, dataName, localName) {
    let res = await fn()
    if(res.data){
      let obj = {}
      switch (dataName) {
        case 'singerTopListData':
          obj[dataName] = res.data.list.artists
          break
        default :
          obj[dataName] = res.data.artists
          break
      }
      setLocal(localName, obj[dataName])
      this.setState(obj)
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className="singer-list-root">
        <MusicSection title="热门歌手"/>
        <SingerList data={this.state.hotSingerData}/>
        <MusicSection title="推荐歌手"/>
        <SingerList data={this.state.recommendSingerData}/>
        <MusicSection title="歌手排行"/>
        <SingerList data={this.state.singerTopListData}/>
      </div>
    )
  }
}
