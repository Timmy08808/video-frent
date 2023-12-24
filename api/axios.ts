import axios, { AxiosHeaders } from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
    timeout: 1000 * 20,
    baseURL: 'http://localhost:6900'
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    const { status, data } = res
    if (status === 200) {
        const { code } = data
        if (code === 200) {
            return data
        } else {
            ElMessage.error(data.msg)
            return Promise.reject(data)
        }
    }
    return Promise.reject({ err: res })
}, err => {
    return Promise.reject(err)
})

const req = method => {
    return (url, data, config: { headers?: AxiosHeaders } = {}) => {
        return instance({
            method,
            url,
            data,
            headers: config?.headers ?? {}
        }).then(res => ({ res }), err => ({ err }))
    }
}

export const GET = req('get')
export const POST = req('post')