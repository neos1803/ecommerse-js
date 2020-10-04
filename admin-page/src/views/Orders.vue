
<template>
     <v-container>           
    <div class="bg-white overflow-auto">
        
           <h1 class="text-3xl text-black pb-6">Order List</h1>
            <!-- <router-link :to="{ name: 'discount-create'}" ><v-btn>+ Add Discount</v-btn></router-link> -->
            <table class="min-w-full bg-white table-fixed">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Invoice</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Total</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>

                    </tr>
                </thead>
                <tbody class="text-gray-700" >
                    
                     <tr class="bg-gray-200" v-for="(order, index) in orders" :key="index">
                          <td  class="w-1/1 text-left py-4 px-4">{{(index+1)}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{ formatDate(order['createdAt']) }}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{order['paymentHeader']}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{ order['Order']['totalPayment']  | toCurrency}}</td>
                          <td  class="w-1/3 text-left py-4 px-4">{{order['status']}}</td>

                          <td>
                            <router-link :to="{ name: 'order-edit', params: {id: order.id}}"><v-btn x-small>Edit</v-btn></router-link>
                            <v-btn x-small @click="deleteOrders(order)">Delete</v-btn>
                        </td>
                      </tr>

            
                </tbody>
            </table>

        </div>
         </v-container>
</template>


<script>
import { mapState} from 'vuex'
import moment from 'moment';
export default {
    computed: {
        ...mapState({
        orders: state => state.orders.orders
        }),
    },
    methods: {
      deleteOrders(order) {
        let response = confirm(`Are you sure you want to delete ${order.name}`)
        if(response){
          this.$store.dispatch('orders/delete', order);
          this.$store.dispatch('snackbar/setSnackbar', {text: `successfully deleted order`});
        }
      },
      formatDate(date){
        return moment(date).format('YYYY-MM-DD')
      }
    }
    
};
</script>