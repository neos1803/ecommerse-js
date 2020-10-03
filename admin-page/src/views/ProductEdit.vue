<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Edit Product</h1>
    <ProductEditForm :product="product" :saveProduct="saveProduct" buttonText="Save Product" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import ProductEditForm from '@/components/ProductEditForm.vue';
  export default {
    components: {
      ProductEditForm,
    },
    computed: {
      ...mapState({
        products: state => state.products.products,
        admin: state => state.users.currentUser
      }),
      product(){
        let product = this.products.find(p => p.id == this.$route.params.id) 
        if(product){
          product.category = product.Categories[0].categoryName
          product.color = product.Variations[0].color == 'undefined' ? '' : product.Variations[0].color  
          product.size = product.Variations[0].size == 'undefined'  ? '' : product.Variations[0].size 
          product.material = product.Variations[0].material == 'undefined'  ? '' : product.Variations[0].material 

          product.categoryEnum = ['Makanan', 'Pakaian', 'Elektronik', 'Alat Masak', 'Olahraga']
          return product
        }
        else{
          return {"adminId":undefined, "name":undefined, "price":undefined, "weight":undefined, "description":undefined, "tags":undefined, "stock":undefined, "category":undefined, "color":undefined, "size":undefined, "material":undefined }
        }
      }
    },
    methods: {
      async saveProduct() {
        
        const formData = new FormData()

        for (let k in this.product) {
          if(k == "adminId"){
            this.product[k] = this.admin.id
          }
          formData.append(k, this.product[k])
          
        }
        let product = await this.$store.dispatch('products/update', formData);
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully Edited product: ${product.data.name}.`});
      },
    },
  }
</script>