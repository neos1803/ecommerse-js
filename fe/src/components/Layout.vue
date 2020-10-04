<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue"
      dark
    >

      <v-toolbar-title
        style="width: 350px"
      >

      <router-link :to="{name: 'home'}"  > 
        <span class="white--text" style="text-decoration: none"> &nbsp;UT Store</span> 
      </router-link>
        
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    <router-link :to="{name: 'carts'}"  > 
     <v-btn v-on="on" icon>
        <v-badge
          :content="cartTotal"
          color="green"
          overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
     </router-link> 
     


    </v-app-bar>
    <v-content>
      <v-bottom-navigation
        :value="activeBtn"
        color="primary"
        horizontal
      >
  
      <router-link :to="{name: 'home'}"  > 
        <span>Home</span>
      </router-link>

      </v-bottom-navigation>
    </v-content>
      <router-view/>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue white--text text-center"
      >


        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>UT eCommerce</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>





<script>
    import { mapState } from 'vuex';
    import Stack from "@/assets/logo-ut.svg";
    export default {
      components: {
        Stack
      },
      computed: {
        ...mapState({
        cartTotal: state => state.products.cartTotal
        })
    },
     
        created(){
          this.$store.dispatch('products/getAllProducts');
          // this.$store.dispatch('discounts/getAllDiscounts');
          this.$store.dispatch('orders/getAllOrders');

        }
    }
</script>
