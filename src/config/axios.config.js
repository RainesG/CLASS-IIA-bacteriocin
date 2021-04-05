import axios from 'axios'

const service = axios.create({
    timeout: 20000,
    withCredentials: true
})

service.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

service.interceptors.response.use(function (response) {
    let {
        data,
        status,
        statusText: err_msg
    } = response
    return {
        data,
        status,
        err_msg
    }
}, function (error) {
    return Promise.reject(error)
})

export default service