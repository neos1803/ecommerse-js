<template>
  <v-form v-model="valid">
    <v-text-field v-model="order.paymentHeader" 
                  label="Invoice" 
                  disabled/>

     <v-select
          v-model="order.status"
          :items="order.statusList"
          :rules="[required('status')]"
          label="Order Status"
        ></v-select>
   
    <router-link :to="{ name: 'orders'}"><v-btn >Kembali</v-btn></router-link>
    <v-btn @click="saveOrder" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  import validations from '@/utils/validations';
  export default {
    data() {
      return {
        valid: false,
        ...validations
      }
    },
    props: ['order', 'saveOrder', 'buttonText']
  }
</script>
