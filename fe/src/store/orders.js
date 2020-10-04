
import Api from './api'

export default{
    namespaced: true,
    state: {
        orders: [],
        totalOrders: 0
    },
    actions: {
        async getAllOrders({ commit}) {
            try {
                const { data } = await Api.get("order");
                commit("SET_ORDERS", { data });
                commit("SET_TOTAL_ORDERS", data.data.totalItems);


            } catch (error) {
                console.log({ error: error.message });
            }

        },

        async create({dispatch}, dataOrder) {
            try {
                let payload = {
                    "user_id": 1,
                    "data": dataOrder
                }
                const responseData = await Api.post('order', payload)
                await dispatch('getAllOrders')
                return responseData
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },
        async update({ dispatch },formData) {
            try {
            
              const { data } = await Api.put('order/' + formData.get('id'), formData)
              await dispatch('getAllOrders')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          },
        async delete({ dispatch }, order) {
            try {
              const { data } = await Api.delete('order/' + order.id)
              await dispatch('getAllOrders')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          }
    },
    mutations: {
        SET_ORDERS(state, payload) {
            console.log(payload)
            state.orders = payload.data.data.Payment
        },
        SET_TOTAL_ORDERS(state, number) {
            state.totalOrders = number
        }
    }
}