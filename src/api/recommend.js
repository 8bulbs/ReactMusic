import $ from 'api/axios.config'

export function getBanner () {
  return $.get('/banner')
}

export function getRecommendSongList () {
  return $.get('/top/playlist?limit=6&order=new')
}

export function getNewestMusic () {
  return $.get('/recommend/songs')
}


