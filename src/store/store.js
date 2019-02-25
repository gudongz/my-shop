import Vue from 'vue'
import Vuex from 'vuex'
import siderMenu from './modules/siderMenu'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        siderMenu
    }
})

export default store
