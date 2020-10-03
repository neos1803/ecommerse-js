<template>
  <v-container>
    <v-app>
    
    
    <UserAuthForm :submitForm="loginUser" buttonText="Login" />
    
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${(index * 60) + 8}px`"
    >
      {{snackbar.text}}

      <v-btn text @click="snackbar.showing = false">
        Close
      </v-btn>
    </v-snackbar>

    </v-app>
  </v-container>
</template>

<script>
  import UserAuthForm from "@/components/UserAuthForm";
  import { mapState } from 'vuex';
  export default {
    components: {
      UserAuthForm
    },
    computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  },
    methods: {
      async loginUser(loginInfo) {

        let response = await this.$store.dispatch('users/login', loginInfo);

        if(response.status == "error"){
          this.$store.dispatch('snackbar/setSnackbar', {color: 'error', text: response.msg});
        } else {
          this.$store.dispatch('snackbar/setSnackbar', {text: 'Welcome, ' + response.msg});
          if(this.$route.params.nextUrl != null){
              this.$router.push(this.$route.params.nextUrl)
          }
          else{
            this.$router.push('/');
          }
          
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>