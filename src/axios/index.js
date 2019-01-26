import axios from 'axios'
import QS from 'qs'

// axios.defaults.baseURL = 'http://10.88.10.31:5638'

/**
 * 环境切换
 */
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://10.88.10.31:5638';
// }

// 设置请求超时
// axios.defaults.timeout = 10000;

// 设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/**
 * 请求拦截器
 */
axios.interceptors.request.use(config => {
    // const token = "this is token";  // 这里写token, 只需要取到保存的token
    // if(token){
    //     config.headers.Authorization = token
    // }
    return config
}, error => {
    return Promise.error(error)
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(response => {
    return response
}, error => {
    // 检测错误状态吗，提示信息
    if (error.response.status) {
        // some code
        console.log(error.response.status)
        console.log(error.response)

        return Promise.reject(error.response)
    }
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url,
            QS.stringify(params)
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
