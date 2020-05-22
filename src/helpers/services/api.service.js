import axios from 'axios'

export class APIService {
  constructor () {
    axios.defaults.baseURL = process.env.VUE_APP_API
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type'
    axios.interceptors.request.use((request) => {
      request.headers['access-token'] = localStorage.getItem('ACCESS_TOKEN')
      return request
    }, (error) => {
      return Promise.reject(error)
    })
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // handle error
        if (error.response && error.response.status === 401) {
          return Promise.reject(error)
        }
      })
  }

  createURL (uri) {
    return uri.join('/')
  }

  get (uri, options = {}) {
    return new Promise((resolve, reject) => {
      axios.get(this.createURL(uri), {
        params: options
      })
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  post (uri, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(this.createURL(uri), data)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  put (uri, data = {}) {
    // const url = uri.join('/')
    return new Promise((resolve, reject) => {
      axios.put(this.createURL(uri), data)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  delete (uri) {
    return new Promise((resolve, reject) => {
      axios.delete(this.createURL(uri))
        .then(resp => {
          resolve(resp.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  forkJoin (apiRequests) {
    return new Promise((resolve, reject) => {
      axios.all(apiRequests)
        .then(resp => {
          resolve(resp.map(v => v))
        })
        .catch(err => reject(err))
    })
  }

  setHeader () {
    axios.defaults.headers = {
      'content-type': 'application/json',
      'access-Token': localStorage.getItem('ACCESS_TOKEN'),
      'uid': localStorage.getItem('UID'),
      'client': localStorage.getItem('CLIENT')
    }
  }
}
