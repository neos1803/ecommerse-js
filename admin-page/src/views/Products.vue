
<template>
     <v-container>           
    <div class="bg-white overflow-auto">
        
           <h1 class="text-3xl text-black pb-6">Product List</h1>
             <router-link :to="{ name: 'product-create'}" ><v-btn>+ Add Product</v-btn></router-link>
            <table class="min-w-full bg-white table-fixed">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Stock</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Weigth</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Tags</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Descriptions</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Category</th>

                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Admin</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Photo</th>

                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>

                    </tr>
                </thead>
                <tbody class="text-gray-700" >
                    
                    <tr class="bg-gray-200" v-for="(product, index) in products" :key="index">
                          <td  class="w-1/1 text-left py-4 px-4">{{(index+1)}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['name']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['stock']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['price'] | toCurrency }}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['weight']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['tags']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['description']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['Categories'][0]['categoryName']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{product['Admin']['username']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4"><img :src="product['imageName']"></td>

                          <td>
                            <router-link :to="{ name: 'product-edit', params: {id: product.id}}"><v-btn x-small>Edit</v-btn></router-link>
                            <v-btn x-small @click="deleteProduct(product)">Delete</v-btn>
                        </td>
                      </tr>
            
                </tbody>
            </table>

        </div>
         </v-container>
</template>

<script>
import { mapState} from 'vuex'

export default {

    computed: {
        ...mapState({
        products: state => state.products.products
        })
    },
    methods: {
      deleteProduct(product) {
        let response = confirm(`Are you sure you want to delete ${product.name}`)
        if(response){
          this.$store.dispatch('products/delete', product);
          this.$store.dispatch('snackbar/setSnackbar', {text: `successfully deleted your product, ${product.name}.`});
        }
      },
   
    }
    
};
</script>