<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Add Discount</h1>
    <ProductEditForm :user="user" :saveUser="saveDiscount" buttonText="Create Discount" />
  </v-container>
</template>

<script>
  import ProductEditForm from '@/components/DiscountEditForm.vue';

  export default {
    data() {
      return {
        discount: {}
      }
    },
    components: {
      DiscountEditForm,
    },
    methods: {
      async saveDiscount() {
        const formData = new FormData()
        for ( var key in this.discount ) {
            formData.append(key, this.discount[key]);
        }

        let discount = await this.$store.dispatch('discounts/create', formData);
        let DiscountName = product.data['Nama Discount']
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully created new discount: ${discountName}.`});
      },
    },
  }
</script>

