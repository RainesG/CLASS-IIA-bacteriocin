import fetch from '@/config/axios.config'

const API_HOST = '/api'

const DEFAULT_CONFIG = {
    isApiHost : true
}

const POST_HEADER = {
    headers: {
        'content-type': 'application/json'
    }
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

export function post(url, params = {}, config = {}) {
    let opts = {
        ...DEFAULT_CONFIG,
        ...POST_HEADER,
        ...config
    }
    return fetch.post(getUrl(url, opts.isApiHost), params, opts)
}

export function Delete(url, params = {}, config = {}) {
    let opts = {
        ...DEFAULT_CONFIG,
        ...POST_HEADER,
        ...config
    }
    return fetch.delete(getUrl(url, opts.isApiHost), params, opts)
}

export function upload(url, params = {}, config = {}) {
    let opts = {
        ...DEFAULT_CONFIG,
        ...POST_HEADER,
        ...config
    }
    let form = new FormData()
    Object.keys(params).forEach(key => {
        form.append(key, params[key])
    })
    return fetch.post(getUrl(url, opts.isApiHost), params, opts)
}

export function download(url, params = {}, type = 'post', config = {}) {
    let opts = {
        ...DEFAULT_CONFIG,
        ...POST_HEADER,
        ...config
    }
    let $form = document.createElement('form')
    $form.setAttribute('method', type)
    $form.setAttribute('hidden', 'hidden')
    $form.setAttribute('action', getUrl(url, opts.isApiHost))

    let createInput = (name, value) => {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', name)
        input.setAttribute('value', value)

        $form.appendChild(input)
    }

    Object.keys(params).forEach(key => {
        createInput(key, params[key])
    })

    let $body = document.body || document.getElementsByName('body')[0]
    $body.append($form)
    $form.submit()
    $form.remove()
}

function getUrl(url, isApiHost) {
    if (!isApiHost) {
        return url
    }
    let arr = [API_HOST]
    arr.push(url)
    return arr.join('')
}