<template>
  <div>
    <v-container>

      <p class="display-3 font-weight-light	text-center pa-4">CART</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12" >
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-center">PRODUK</th>
                <th class="text-center">HARGA</th>
                <th class="text-center">QUANTITY</th>
                <th class="text-center">TOTAL</th>
                <th class="text-center"></th>
              </tr>
              </thead>
              <tbody>
              <tr :key="product.id" v-for="product in cartProducts">
                <td>
                  <v-list-item
                >
                  <v-list-item-avatar >
                    <v-img :src="product.imageName"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title >{{ product.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ product.descriptions }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item></td>
                <td>{{ product.price | toCurrency }}</td>


                  <v-text-field
                    v-model="product.quantity"

                    class="pt-10"
                    label="Outlined"
                    style="width: 80px;"
                    single-line
        
                    type="number"
                  ></v-text-field>
                </td>
                <td>{{ productPrice(product.price,product.quantity) | toCurrency }}</td>
                <td><a @click="deleteFromCart(product)">X</a></td>
              </tr>
           
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Detail Order</p>
        
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px;">{{ totalSubOrder | toCurrency }}</td>
              </tr>
              <tr>
                <td>Biaya Kirim</td>
                <td class="text-right" style="width: 50px;">Rp.10.000</td>
              </tr>
              <tr>
                <td>Total</td>
                <td class="text-right" style="width: 50px;"><b>{{ totalCartOrder | toCurrency}}</b></td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined  @click="createOrder()">Order</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import { mapState } from 'vuex'

    export default {
 
      computed: {
        ...mapState({
        cartProducts: state => state.products.cartProducts,
        }),

        totalSubOrder(){
            if(this.cartProducts.length > 0){
              let total = 0;
              Object.values(this.cartProducts).forEach(val => {
                if(Number.isInteger(parseInt(val.quantity))){
                  total += parseInt(val.price) * parseInt(val.quantity)
                  
                }
                else{
                  total += parseInt(val.price) 
                }
                // total += parseInt(val.price) * parseInt(val.quantity)
              });
              this.totalCartPrice = total
            }
            else{
              this.totalCartPrice =  0

            }

            return this.totalCartPrice
            
        },
        totalCartOrder(){
          if(this.cartProducts.length > 0){
            return parseInt(this.totalCartPrice) + 10000
          }
          else{
            return 0
          }
          

        }
       },
       methods: {
        deleteFromCart(product) {
          this.$store.dispatch('products/deleteFromCart',product);
        },
        productPrice(price,quantity){
          if(!quantity){
            return price;
          }
          else{
            return price * quantity;
          }
          
        },
        async createOrder() {

          let dataOrder = {
              "discountId": 1,
              "courierName": "jne",
              "courierService": "OKE",
              "courierPrice": 10000,
              "totalPayment": this.totalCartOrder,
              "bank": "bni",
              "items": []
          }

           let items;
           Object.values(this.cartProducts).forEach(val => {
              dataOrder.items.push({ "productId": val.id, "adminId": 1, "quantity": val.quantity })
            });

          await this.$store.dispatch('orders/create', dataOrder);
          this.$store.dispatch('snackbar/setSnackbar', {text: `successfully create Order`});
            
          }

       },
      data: () => ({
            totalCartPrice: 0,
            totalCart: 0,
            totalOrder: 0,
            rating: 4.5,

         
        })
    }
</script>

