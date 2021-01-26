<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="1"
    >

      <v-app-bar-title>Virtual Logic Inc.</v-app-bar-title>

      <v-spacer />

      <!-- twitter -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="black">

            mdi-twitter

          </v-icon>

        </v-btn>

      </div>

      <!-- facebook -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="black">

            mdi-facebook

          </v-icon>

        </v-btn>

      </div>

      <!-- instagram -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="black">

            mdi-instagram

          </v-icon>

        </v-btn>

      </div>

    </v-app-bar>

    <v-main>
      <Form/>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Form from './components/Form'

export default {
  name: 'App',

  components: {
    // HelloWorld
    Form
  },

  data: () => ({
    //
  })
}
</script>
