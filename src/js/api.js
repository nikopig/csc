import axios from 'axios'
const baseUrl = '/api'
// axios.defaults['headers'] = {'Content-Type': 'application/json', 'catrset': 'utf8'}
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
  post: (table, data) => {
    let seat = ''
    if (data && data.length > 0) seat = data.map(i => '?').join(',')
    return new Promise((resolve, reject) => {
      let params = {
        method: 'mode_accdb_s',
        table: `${table}(${seat})`,
        data: data,
        type: 'getdss'
      }
      axios.post(baseUrl, params)
      .then(res => {
        console.log(res)
        if (res.status === 200 || res.status === 304) {
          resolve(res.data)
        } else {
          reject(res.err)
        }
      })
    })
  }
}