
import Vue from 'vue'

// 根据返回状态码，进行消息提示
export function $message(code, msg = '') {
    switch (code) {
    case '00000':
        Vue.prototype.$message.success(msg)
        break
    default:
        Vue.prototype.$message.error(msg)
        break
    }
}

// 将数组转换为树形数据， 每项包含id 和 pid（父节点id）
export function changeTree(arr) {
    let obj = {}
    arr.forEach((item) => {
        obj[item.id] = item
    })
    arr.forEach((item) => {
        if (item.pId !== 0) {
            obj[item.pId].children
                ? obj[item.pId].children.push(item)
                : obj[item.pId].children = [item]
        }
    })
    let targetData = arr.filter((item) => {
        if (item.pId === 0) {
            return true
        }
    })
    return [...targetData]
}
