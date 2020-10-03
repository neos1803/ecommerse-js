
<template>
     <v-container>           
    <div class="bg-white overflow-auto">
        
           <h1 class="text-3xl text-black pb-6">Discount List</h1>
             <router-link :to="{ name: 'discount-create'}" ><v-btn>+ Add Discount</v-btn></router-link>
            <table class="min-w-full bg-white table-fixed">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone Number</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>


                    </tr>
                </thead>
                <tbody class="text-gray-700" >
                    
                    <!--<tr class="bg-gray-200" v-for="(discount, index) in discounts" :key="index">
                    //       <td  class="w-1/1 text-left py-4 px-4">{{(index+1)}}</td>
                    //       <td  class="w-1/3 text-left py-4 px-4">{{discount['name']}}</td>
                    //       <td  class="w-1/3 text-left py-4 px-4">{{discount['expiredTime']}}</td>
                    //       <td  class="w-1/3 text-left py-4 px-4">{{discount['totalDiscount']}}</td>

                    //       <td>
                    //         <router-link :to="{ name: 'discount-edit', params: {id: discount.id}}"><v-btn x-small>Edit</v-btn></router-link>
                    //         <v-btn x-small @click="deleteDiscount(discount)">Delete</v-btn>
                    //     </td>
                    //   </tr> -->

            
                </tbody>
            </table>

        </div>
         </v-container>
</template>


<script>
// import { mapState} from 'vuex'

// export default {
//     computed: {
//         ...mapState({
//         discounts: state => state.discounts.discounts
//         }),
//     },
//     methods: {
//       deleteDiscount(discount) {
//         let response = confirm(`Are you sure you want to delete ${discount.name}`)
//         if(response){
//           this.$store.dispatch('discounts/delete', discount);
//           this.$store.dispatch('snackbar/setSnackbar', {text: `successfully deleted your product, ${discount.name}.`});
//         }
//       }
//     }
    
// };
</script>