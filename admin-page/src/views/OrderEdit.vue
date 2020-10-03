<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Edit Discount</h1>
    <OrderEditForm :order="order" :saveOrder="saveOrder" buttonText="Save Order" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import OrderEditForm from '@/components/OrderEditForm.vue';
  export default {
    components: {
      OrderEditForm,
    },
    computed: {
      ...mapState({
        orders: state => state.orders.orders
      }),
      order(){
        let order = this.orders.find(p => p.id == this.$route.params.id) || {};
        order.statusList = ['failure','pending','success']
        return order
      }
    },
    methods: {
      async saveOrder() {
        
        const formData = new FormData()

        for (let k in this.order) {
          formData.append(k, this.order[k])
          
        }
        await this.$store.dispatch('orders/update', formData);
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully Edited order`});
      },
    },
  }
</script>