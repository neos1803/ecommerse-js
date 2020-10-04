<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item
              :src="product.imageName"
            >
            </v-carousel-item>

          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">

          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.name }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">{{ product.price | toCurrency }}</p>
             
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.description }}
            </p>
           
    
            <v-btn class="primary white--text" outlined tile dense  @click.native="addProductToCart(pro)"><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn>


          </div>

        </di>
      </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-tabs>
            <v-tab >Materials</v-tab>
            <v-tab >Tags</v-tab>
             <v-tab >Color</v-tab>

            <v-tab-item class="blue lighten-4">
              <p class="pt-10 subtitle-1 font-weight-light">
                {{ product.Variations[0].material }}
              </p>
            </v-tab-item>
            <v-tab-item class="blue lighten-4">
              <p class="pt-5 subtitle-1 font-weight-light">
                {{ product.tags }}
              </p>
            </v-tab-item>
            <v-tab-item class="blue lighten-4">
              <p class="pt-5 subtitle-1 font-weight-light">
                {{ product.Variations[0].color }}
              </p>
            </v-tab-item>
            
          </v-tabs>
       
        </div>
      </div>
    </v-container>
    
  </div>
</template>

<script>
  
  import { mapState } from 'vuex';
  export default {
    
    computed: {
      ...mapState({
        products: state => state.products.products
      }),
      product(){
        let product = this.products.find(p => p.id == this.$route.params.id) || {};
        return product
      }
    },
    methods: {
      addProductToCart(product) {
          this.$store.dispatch('products/addProduct',this.product);
      }
    },
  }
</script>
