<template>
  
     <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>LOGIN ADMIN UT STORE</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
     

                   <v-text-field v-model="userInfo.username" 
                  label="Name" 
                  prepend-icon="mdi-account"
                  :rules="[required('username')]"
                   />


                  <v-text-field v-model="userInfo.password"
                  prepend-icon="mdi-lock"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  counter=true
                  :rules="[required('password'), minLength('password', 1)]"
                  />

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="primary">Login</v-btn> -->
                <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

</template>

<script>
  import validations from "@/utils/validations";

  export default {
    data() {
      return {
        valid: false,
        showPassword: false,
        userInfo: {
          username: '',
          password: ''
        },
        ...validations
      }
    },
    props: ["submitForm", "buttonText"]
  }
</script>
