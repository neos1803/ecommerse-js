
import Api from './api'

export default{
    namespaced: true,
    state: {
        products: [],
        totalItems: null,
        totalPages: null,
        currentPage: null,
        totalProducts: 0,
        cartProducts: [],
        cartTotal:0
    },
    actions: {
        addProduct: ({commit},product) => {
            commit('ADD_PRODUCT', product);
          },
        deleteFromCart: ({ commit }, product) => {
            commit("DELETE_FROM_CART", product);

        },
        async getAllProducts({ commit}) {
            try {
                const { data } = await Api.get("product");
                console.log("ALL PRODUCTS", data)
                commit("SET_PRODUCTS", { data });
                commit("SET_TOTAL_PRODUCTS", data.data.totalItems);


            } catch (error) {
                console.log({ error: error.message });
            }

        },

        async create({dispatch}, formData) {
            try {
                const { data } = await Api.post('product', formData)
                await dispatch('getAllProducts')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },
        async update({ dispatch },formData) {
            try {
            
              const { data } = await Api.put('product/' + formData.get('id'), formData)
              await dispatch('getAllProducts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          },
        async delete({ dispatch }, product) {
            try {
              const { data } = await Api.delete('product/' + product.id)
              await dispatch('getAllProducts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          }
    },
    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
            state.cartTotal = state.cartProducts.length
          },
        DELETE_FROM_CART: (state, product) => {

            if(state.cartProducts.length > 0){
                let cartProductIndex = state.cartProducts.findIndex((cartProduct) => cartProduct.id === product.id);
                state.cartProducts.splice(cartProductIndex, 1);
                state.cartTotal = state.cartProducts.length
            }
            else{
                state.cartProducts = []
                state.cartTotal = 0
            }
            

        },
        SET_PRODUCTS(state, payload) {
            
            state.products = payload.data.data.Product

           
            state.totalItems = payload.data.data.totalItems
            state.totalPages = payload.data.data.totalPages
            state.currentPage = payload.data.data.currentPage
        },
        SET_TOTAL_PRODUCTS(state, number) {
            state.totalProducts = number
        }
    }
}