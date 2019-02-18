
import Vue from 'vue'

// 根据返回状态码，进行消息提示
export function $message(code, msg) {
    console.log(code)
    switch (code) {
    case '00000':
        Vue.prototype.$message.success(msg)
        break
    default:
        Vue.prototype.$message.error(msg)
        break
    }
}
