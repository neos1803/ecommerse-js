<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Add Order</h1>
    <ProductEditForm :order="order" :saveOrder"saveOrder" buttonText="Create Order" />
  </v-container>
</template>

<script>
  import ProductOrderForm from '@/components/OrderEditForm.vue';

  export default {
    data() {
      return {
        order: {}
      }
    },
    components: {
      OrderEditForm,
    },
    methods: {
      async saveOrder() {
        const formData = new FormData()
        for ( var key in this.order ) {
            formData.append(key, this.order[key]);
        }

        let order = await this.$store.dispatch('orders/create', formData);
        let OrderName = order.data['Nama Order']
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully created new discount: ${discountName}.`});
      },
    },
  }
</script>

