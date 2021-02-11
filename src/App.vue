<template>

  <v-app>

    <v-app-bar
      app
      dense
      flat
      :color="color"
    >

      <v-spacer />

      <SocialIcons :store="stor_nme"/>

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

            <h1 class="browhausH1" v-else>Hey Brow Buddy!</h1>

          </v-col>

        </v-row>

        <!-- 2nd descript -->
        <v-row
          align="center"
          justify="center"
        >

          <v-col md="6">

            <h1 class="text-justify.text-center stripH1" v-if="stor_nme === 'strip'"> Welcome to the Strip: Ministry of Waxing, the Global Authority in Hair Removal with 48 parlours in 12 major capital cities worldwide.</h1>

            <h1 class="text-justify.text-center browhausH1" v-else>Welcome to your one-stop brow and lash grooming salon built for you, the image-conscious urbanite who demands not just function, but function and style.</h1>

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
import SocialIcons from '@/components/SocialMedia.vue'

export default {
  name: 'App',
  components: {
    SocialIcons
  },
  computed: {
    color () {
      return this.$vuetify.theme.dark ? '#121212' : 'white'
    }
  },
  data () {
    return {
      stor_nme: process.env.VUE_APP_STORE_NAME,
      logo: {
        strip: require('@/assets/strip.jpg'),
        browhaus: require('@/assets/browhaus.png')
      }
    }
  }
}
</script>

<style>
/* @import url('https://fonts.cdnfonts.com/css/gotham'); */
/* @import url('https://www.cssfontstack.com/Helvetica'); */

@font-face {
  font-family: "Gotham Thin";
  src: url(./fonts/Gotham-XLight.ttf) format("TrueType");
}

@font-face {
  font-family: 'VAG Rounded Std';
  src: url(./fonts/VAGRoundedStd-Thin.otf) format("OpenType");
}

  .stripH1 {
    font-family: 'Gotham Thin', sans-serif;
    text-align: center;
    color:#6A1B9A;
  }

  .browhausH1{
  font-family: 'VAG Rounded Std', sans-serif;
  text-align: center;
  color:#76881d;

}

</style>
