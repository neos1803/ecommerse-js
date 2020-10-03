
import Api from './api'

export default{
    namespaced: true,
    state: {
        discounts: [],
        totalDiscounts: 0
    },
    actions: {
        async getAllDiscounts({ commit}) {
            try {
                const { data } = await Api.get("discount");
                commit("SET_DISCOUNTS", { data });
                commit("SET_TOTAL_DISCOUNTS", data.data.totalItems);


            } catch (error) {
                console.log({ error: error.message });
            }

        },

        async create({dispatch}, formData) {
            try {
                const { data } = await Api.post('discount', formData)
                await dispatch('getAllDiscounts')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },
        async update({ dispatch },formData) {
            try {
            
              const { data } = await Api.put('discount/' + formData.get('id'), formData)
              await dispatch('getAllDiscounts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          },
        async delete({ dispatch }, discount) {
            try {
              const { data } = await Api.delete('discount/' + discount.id)
              await dispatch('getAllDiscounts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          }
    },
    mutations: {
        SET_DISCOUNTS(state, payload) {
            console.log(payload)
            state.discounts = payload.data.data.Discount
        },
        SET_TOTAL_DISCOUNTS(state, number) {
            state.totaldiscounts = number
        }
    }
}