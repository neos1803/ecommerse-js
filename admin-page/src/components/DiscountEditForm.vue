<template>
  <v-form v-model="valid">
    <v-text-field v-model="discount.discountName" 
                  label="Discount Name" 
                  :rules="[required('discountName')]" />
    <v-menu
            v-model="showPicker"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
            max-width="290px"
             >
            <template v-slot:activator="{ on }">
              <v-text-field
               v-model="discount.expired"
               label="date"
               prepend-icon="mdi-calendar-range"
               readonly
               v-on="on"
              :rules="[required('discountName')]" 
               ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="closeDateMenu"></v-date-picker>
          </v-menu>
    <v-text-field v-model="discount.total" 
                label="Total Discount" 
                :rules="[required('total')]"/>
      
    <router-link :to="{ name: 'discounts'}"><v-btn >Kembali</v-btn></router-link>
    <v-btn @click="saveDiscount" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  import validations from '@/utils/validations';
  import moment from 'moment';
  export default {
    data() {
      return {
        showPicker: false,
        selectedDate: null,
        date:null,
        valid: false,
        ...validations
      }
    },
    props: ['discount', 'saveDiscount', 'buttonText'],
    methods:{
    closeDateMenu (){
       this.showPicker = false;
       this.discount.expired = this.date ? moment(this.date).format('YYYY-MM-DD'): '';
     },
    }
  }
</script>
