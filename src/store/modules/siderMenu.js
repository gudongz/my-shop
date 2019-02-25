
const state = {
    menu: []
}
const getters = {
    getMenu(state) {
        return state.menu
    }
}

const mutations = {
    changeMenu(state, val) {
        state.menu = [...val]
    }
}

const actions = {
    setMenu(context, val) {
        context.commit('changeMenu', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
