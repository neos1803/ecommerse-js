<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Edit Discount</h1>
    <DiscountEditForm :discount="discount" :saveDiscount="saveDiscount" buttonText="Save Discount" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import DiscountEditForm from '@/components/DiscountEditForm.vue';
  export default {
    components: {
      DiscountEditForm,
    },
    computed: {
      ...mapState({
        discounts: state => state.discounts.discounts
      }),
      discounts(){
        return this.discounts.find(p => p.id == this.$route.params.id) || {};
      }
    },
    methods: {
      async saveDiscount() {
        
        const formData = new FormData()

        for (let k in this.discounts) {
          formData.append(k, this.discounts[k])
          
        }
        let discount = await this.$store.dispatch('discounts/update', formData);
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully Edited product: ${discount.data.name}.`});
      },
    },
  }
</script>