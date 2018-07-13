const PLAYER = new Audio()

const INIT_State = {
  playlist: [],
  isPlay: false,
  isMini: false
}

const ADD_TO_PLAYLIST = 'addToPlayList'
const AUDIO_PLAY = 'audioPlay'

function handleAudioPlay (state, PLAYER) {
  state.playlist.isPlay = true
  PLAYER.pause()
  let id = state.playlist[state.playlist.length - 1].id
  PLAYER.src = 'http://music.163.com/song/media/outer/url?id=' + id + '.mp3'
  console.log(PLAYER.src)
  let timer = setTimeout(() => {
    PLAYER.play()
    clearTimeout(timer)
    timer = null
  }, 700)
}

export function playListManager (state = INIT_State, action) {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      console.log('redux1', action.payload)
      state.playlist.push(action.payload)
      return state
    case AUDIO_PLAY:
      handleAudioPlay(state, PLAYER)
      return state
    default:
      return state
  }
}

export function addToPlayList (payload) {
  return { type: ADD_TO_PLAYLIST, payload}
}

export function audioPlay (payload) {
  return { type: AUDIO_PLAY, payload}
}

