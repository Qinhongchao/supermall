import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'any-promise';

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
        },
        changeByIndex(id){
            

        }
    },
    actions: {
        addCart(context, payload) {
            return new Promise((resolve,reject)=>{
                let oldProduct = context.state.cartList.find((item) => {
                    return item.iid == payload.iid;
                });
                if (oldProduct) {
                    context.commit("addCounter", oldProduct);
                } else {
                    context.commit("addToCart", payload);
                }
                resolve("添加商品成功");
            })
            
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