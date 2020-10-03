<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Add Product</h1>
    <ProductEditForm :product="product" :saveProduct="saveProduct" buttonText="Create Product" />
  </v-container>
</template>

<script>
  import ProductEditForm from '@/components/ProductEditForm.vue';
  import { mapState } from 'vuex';
  export default {
     computed: {
      ...mapState({
        admin: state => state.users.currentUser
      })
    },
    data() {
      return {
        product: {"adminId": undefined, "name":undefined, "price":undefined, "weight":undefined, "description":undefined, "tags":undefined, "stock":undefined, "categoryEnum": ['Makanan', 'Pakaian', 'Elektronik', 'Alat Masak', 'Olahraga'], "color":'', "size":'', "material":'' }
      }
    },
    components: {
      ProductEditForm,
    },
    methods: {
      async saveProduct() {
        const formData = new FormData()
        for ( var key in this.product ) {
            if(key == "adminId"){
              this.product[key] = 1
            }
            formData.append(key, this.product[key]);
        }

        let product = await this.$store.dispatch('products/create', formData);
        let productName = product.data['Nama Product']
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully created new product: ${productName}.`});
      },
    },
  }
</script>

