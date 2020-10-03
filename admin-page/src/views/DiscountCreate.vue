<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Add Discount</h1>
    <DiscountEditForm :discount="discount" :saveDiscount="saveDiscount" buttonText="Create Discount" />
  </v-container>
</template>

<script>
  import DiscountEditForm from '@/components/DiscountEditForm.vue';

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

        await this.$store.dispatch('discounts/create', formData);
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully created new discount`});
      },
    },
  }
</script>

