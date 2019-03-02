
const state = {
    appUserInfo: {}
}
const getters = {
    getAppUserInfo(state) {
        return state.appUserInfo
    }
}

const mutations = {
    changeAppUserInfo(state, val) {
        state.appUserInfo = { ...val }
    }
}

const actions = {
    changeAppUserInfo(context, val) {
        context.commit('changeAppUserInfo', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
