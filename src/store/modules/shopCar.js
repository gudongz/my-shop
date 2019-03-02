
const state = {
    shopCar: []
}
const getters = {
    getShopCar(state) {
        return state.shopCar
    }
}

const mutations = {
    // 添加购物车 TODO 如果有同件商品应该累加
    addShopCar(state, val) {
        if (state.shopCar.length === 0) {
            state.shopCar.push(val)
        } else {
            let index = -1
            state.shopCar.map((item, i) => {
                if (item.id === val.id) {
                    index = i
                }
            })
            if (index !== -1) {
                state.shopCar[index].num += val.num
            } else {
                state.shopCar.push(val)
            }
        }
    },
    // 删除某件商品
    deleShopCarById(state, val) {
        state.shopCar.forEach((item, index) => {
            if (item.id === val) {
                state.shopCar.splice(index, 1)
            }
        })
    }
}

const actions = {
    addShopCarAction(context, val) {
        context.commit('addShopCar', val)
    },
    deleShopCarByIdAction(context, val) {
        context.commit('deleShopCarById', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
