<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Edit Discount</h1>
    <DiscountEditForm :discount="discount" :saveDiscount="saveDiscount" buttonText="Save Discount" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import DiscountEditForm from '@/components/DiscountEditForm.vue';
  import moment from 'moment';
  export default {
    components: {
      DiscountEditForm,
    },
    computed: {
      ...mapState({
        discounts: state => state.discounts.discounts
      }),
      discount(){
        
        let discount = this.discounts.find(p => p.id == this.$route.params.id) || {};
        discount.expired = moment(discount.expired ).format('YYYY-MM-DD')
        return discount
      }
    },
    methods: {
      async saveDiscount() {
        
        const formData = new FormData()

        for (let k in this.discount) {
          formData.append(k, this.discount[k])
          
        }
        await this.$store.dispatch('discounts/update', formData);
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully Edited Discount`});
      },
    },
  }
</script>