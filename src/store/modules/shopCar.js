
const state = {
    shopCar: []
}
const getters = {
    getShopCar(state) {
        return state.shopCar
    }
}

const mutations = {
    // 添加购物车
    addShopCar(state, val) {
        state.shopCar.push(val)
    }
    // 删除某件商品
    // deleShopCarById(state, val) {
    // state.shopCar
    // }
}

const actions = {
    addShopCarAction(context, val) {
        context.commit('addShopCar', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
