<template>

  <v-app>

    <v-app-bar
      app
      dense
      flat
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

    <v-main class="mt-n16">

      <v-container>

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
              contain
              :src="logo.strip"
              height="400px"
              width="300px"
              class="mb-n10"
              v-if="stor_nme === 'strip'"
            />

            <v-img
              contain
              :src="logo.browhaus"
              height="400px"
              width="300px"
              class="mb-n16"
              v-else
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

            <h1 class="stripH1" v-if="stor_nme === 'strip'">Hey Strip Mates!</h1>

            <h1 class="stripH1" v-else>Hey Brow Buddy!</h1>

          </v-col>

        </v-row>

        <!-- 2nd descript -->
        <v-row
          align="center"
          justify="center"
        >

          <v-col md="6">

            <h1 class="text-justify.text-center stripH1" v-if="stor_nme === 'strip'"> Welcome to the Strip: Ministry of Waxing, the Global Authority in Hair Removal with 48 parlours in 12 major capital cities worldwide.</h1>

            <h1 class="text-justify.text-center stripH1" v-else>Welcome to your one-stop brow and lash grooming salon built for you, the image-conscious urbanite who demands not just function, but function and style.</h1>

          </v-col>

        </v-row>
        <!-- end of strip description -->

        <!-- browhaus description -->
        <!-- end of browhaus description -->

        <!-- if using vue-router -->
        <router-view></router-view>

      </v-container>

    </v-main>

  </v-app>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      stor_nme: 'strip',
      style: false,
      logo: {
        strip: require('@/assets/strip.jpg'),
        browhaus: require('@/assets/browhaus.png')
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/gotham');

  .stripH1 {
    font-family: 'Gotham Thin', sans-serif;
    text-align: center;
    color:#7e7e7e;
  }

</style>
