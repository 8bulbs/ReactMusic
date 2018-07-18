import $ from 'api/axios.config'

export function getHotSinger () {
  return $.get('/top/artists?offset=0&limit=12')
}

export function getRecommendSinger () {
  return $.get('/top/artists?offset=12&limit=12')
}

export function getSingerToplist () {
  return $.get('/toplist/artist')
}
