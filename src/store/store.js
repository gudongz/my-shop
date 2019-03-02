import Vue from 'vue'
import Vuex from 'vuex'
import siderMenu from './modules/siderMenu'
import shopCar from './modules/shopCar'
import userInfo from './modules/userInfo'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        siderMenu,
        shopCar,
        userInfo
    }
})

export default store
