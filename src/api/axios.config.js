import axios from 'axios'

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log('未知错误', 'middle')
    return Promise.resolve(err)
  }
)
axios.interceptors.response.use(
  data => {
    // if (data.status && data.status === 200 && data.data.code !== 0) {
    //   alert(data.data.msg)
    // }
    return data
  },
  err => {
    console.log('reponseErroe', err)
    // loading.hide()
    if (err.code === 'ECONNABORTED') {
      console.dir(err)
      console.log('请求超时', 'middle')
      return Promise.resolve(err)
    }
    if (err.response.status === 504 || err.response.status === 404) {
      console.log('服务器被吃了⊙﹏⊙∥')
    } else if (err.response.status === 403) {
      console.log('权限不足,请联系管理员!')
    } else if (err.response.status === 502) {
      console.log('网络错误!')
    } else {
      console.log('未知错误!')
    }
    return Promise.resolve(err)
  }
)
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 处理res data
const operaRes = data => {
  return data
}

// 通过axios发送请求
export default async (path, queryData, type = 'get') => {
  if (!window.navigator.onLine) {
    console.log('网络请求失败，请检查您的网络设置', 'middle')
    // loading.hide()
    let err = {
      offLine: true
    }
    return Promise.resolve(err)
  }
  let str = ''
  let url = str.concat(path)
  let result
  if (type === 'get') {
    if (queryData) {
      result = await axios.get(url, {
        params: queryData
      })
    } else {
      result = await axios(url)
    }
  } else {
    result = await axios({
      method: 'post',
      url: url,
      data: queryData
    })
  }
  let resdata = operaRes(result)
  return new Promise((resolve, reject) => {
    resolve(resdata)
  }).catch(function (error) {
    console.log('error: ' + error)
  })
}
