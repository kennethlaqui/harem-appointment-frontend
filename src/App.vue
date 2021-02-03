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
      <v-row align="center" justify="center">
        <v-col align="center" justify="center">

          <v-img class="mx-16"
            alt="strip"
            contain
            :src="images.company"
            height="400px"
            width="300px"
          />

        </v-col>

      </v-row>

      <router-view />

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    images: {
      company: require('@/assets/strip.jpg')
    }
  })
}
</script>
