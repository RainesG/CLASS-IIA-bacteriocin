import fetch from 'axios'

const API_HOST = '/api'
// fetch.mode = 'cors'

const DEFAULT_CONFIG = {
    isApiHost : true
}

export function get(url, params = {}, config = {}) {
    let opts = {
        ...DEFAULT_CONFIG,
        ...config
    }
    opts.params = {
        ...params
    }
    return fetch.get(getUrl(url, opts.isApiHost), opts)
}

function getUrl(url, isApiHost) {
    if (!isApiHost) {
        return url
    }
    let arr = [API_HOST]
    arr.push(url)
    return arr.join('')
}