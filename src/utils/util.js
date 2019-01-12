
import Vue from 'vue'
/**
 * 加载遮罩层
 * @param {string} str [需要加遮罩的dom classname]
 */
export function load(str) {
    let option ={
        target: str,
        lock: true,
        fullscreen: false,
        text: "拼命加载中..."
    }
    return Vue.prototype.$loading(option)
}
