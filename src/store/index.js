import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        cartList: []
    },
    mutations: {
        addToCart(state, payload) {
            state.cartList.push(payload);
        },
        addCounter(state, payload) {
            payload.count++;
        }
    },
    actions: {
        addCart(context, payload) {

            let oldProduct = context.state.cartList.find((item) => {
                return item.iid == payload.iid;
            });
            if (oldProduct) {
                context.commit("addCounter", oldProduct);
            } else {
                context.commit("addToCart", payload);


            }
        }
    },
    getters: {
        cartListLength(state) {
            return state.cartList.length;
        },
        cartList(state) {
            return state.cartList;
        }

    },
    modules: {}
})