<template>
  <v-app>
    <v-app-bar
      aabsolute
      app
      color="white"
      dense
      flat
      hide-on-scroll
    >

      <v-spacer />

      <!-- twitter -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="purple darken-3">

            mdi-twitter

          </v-icon>

        </v-btn>

      </div>

      <!-- facebook -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="purple darken-3">

            mdi-facebook

          </v-icon>

        </v-btn>

      </div>

      <!-- instagram -->
      <div class="mr-2">

        <v-btn icon>

          <v-icon large color="purple darken-3">

            mdi-instagram

          </v-icon>

        </v-btn>

      </div>

    </v-app-bar>

    <v-main>

      <!-- logo -->
      <v-row
        align="center"
        justify="center"
      >

        <v-col
          align="center"
          justify="center"
        >

          <v-img
            class="mx-16"
            alt="strip"
            contain
            :src="images.company"
            height="400px"
            width="300px"
          />

        </v-col>

      </v-row>

      <!-- strip description -->
      <!-- 1st descript -->
      <v-row
        align="center"
        justify="center"
        class="mt-n16"
      >

        <v-col
          align="center"
          justify="center"
        >

          <h1 class="stripH1">Hey Strip Mates!</h1>

        </v-col>

      </v-row>

      <!-- 2nd descript -->
      <v-row
        align="center"
        justify="center"
      >

        <v-col md="6">

          <h1 class="text-justify.text-center stripH1"> Welcome to the Strip: Ministry of Waxing, the Global Authority in Hair Removal with 48 parlours in 12 major capital cities worldwide.</h1>

        </v-col>

      </v-row>
      <!-- end of strip description -->

      <!-- browhaus description -->
      <!-- end of browhaus description -->

      <v-spacer />

      <!-- if using vue-router -->
      <router-view />

    </v-main>

  </v-app>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      style: false,
      images: {
        company: require('@/assets/strip.jpg')
      }
    }
  }
}
</script>

<style lang ="scss">
@import url('http://fonts.cdnfonts.com/css/gotham');

  .stripH1{
    font-family: 'Gotham Thin', sans-serif;
    text-align: center;
    color:#4A148C;
  }

</style>
