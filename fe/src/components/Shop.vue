<template>
  <div>
    <v-container>
      <div class="row">
       
        <div
          class="col-md-12 col-sm-12 col-xs-12"
        >



          <v-row dense>
            <v-col cols="12" sm="8" class="pl-6 pt-6">
              <small>Menampilkan {{ totalProduct }} dari {{ totalItems }} produk</small>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <div class="row text-center">
            <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in products">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                >
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16/9"
                    height="300px"
                    :src="pro.imageName"
                  >
                    <v-card-title class="black lighten-4"> {{pro['Categories'][0]['categoryName']}}</v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" class="" outlined @click.native="addProductToCart(pro)"><v-icon>mdi-cart</v-icon> Add to cart</v-btn>
                        
                        <v-btn v-if="hover" class="" outlined><router-link :to="{ name: 'product-detail', params: {id: pro.id}}">Detail</router-link></v-btn>
                      </div>

                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div><a href="/product" style="text-decoration: none">{{pro.name}}</a></div>
                    <div>{{ pro.price | toCurrency }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
          <div class="text-center mt-12">
            <v-pagination
              v-model="currentPages"
              :length="totalPages"
            ></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
<script>
  import { mapState } from 'vuex'

    export default {
       computed: {
        ...mapState({
        products: state => state.products.products,
        totalPages: state => state.products.totalPages,
        totalItems: state => state.products.totalItems,
        currentPages: state => state.products.currentPage,
        totalProduct: state => state.products.totalProducts,
        cartProduct: state => state.products.cartProducts,

        })
    },
    methods: {
        addProductToCart(product) {
          this.$store.dispatch('products/addProduct',product);
        },
          deleteProduct(product) {
            let response = confirm(`Are you sure you want to delete ${product.name}`)
            if(response){
              this.$store.dispatch('products/delete', product);
              this.$store.dispatch('snackbar/setSnackbar', {text: `successfully deleted your product, ${product.name}.`});
            }
          },
      
        },
        data: () => ({
            select:'Kategory',
            options: [
                'Kategory',
                '...'
            ],

        }),
    }
</script>
