<template>
  <v-form v-model="valid">
    <v-text-field v-model="product.name" 
                  label="Nama Produk" 
                  :rules="[required('name')]" />
    <v-text-field v-model="product.stock" 
                label="Jumlah Stock" 
                :rules="[required('stock')]"/>
    <v-text-field v-model="product.price" 
                label="Harga" 
                :rules="[required('price')]"/>
    <v-text-field v-model="product.weight" 
                label="Berat satuan" 
                :rules="[required('weight')]"/>
    <v-text-field v-model="product.tags" 
                label="Product Tags" 
                :rules="[required('tags')]"/>
    <v-text-field v-model="product.description" 
                label="Deskripsi" 
                :rules="[required('description')]"/>
    <v-select
          v-model="product.category"
          :items="product.categoryEnum"
          :rules="[required('category')]"
          label="Product Category"
        ></v-select>

    
    <v-img
    max-height="150"
    max-width="250"
    :src="product.imageName"
  >
  </v-img>

    <v-file-input v-model="product.picture" accept="image/*" label="Foto Produk"></v-file-input>
   

    <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="product.color"
            :rules="[required('color')]"
            label="Product Color"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="product.size"
            :rules="[required('size')]"
            label="Product Size"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
             v-model="product.material"
            :rules="[required('material')]"
            label="Product Material"
            required
          ></v-text-field>
        </v-col>
      </v-row>

    <router-link :to="{ name: 'products'}"><v-btn >Kembali</v-btn></router-link>
    <v-btn @click="saveProduct" :disabled="!valid">{{buttonText}}</v-btn>
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
    props: ['product', 'saveProduct', 'buttonText']
  }
</script>
