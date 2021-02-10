<template>

  <v-app>
    <v-app-bar
      app
      dense
      flat
    >
    <v-spacer />

      <!-- facebook strip-->
      <template v-if="store === 'strip'">
        <v-btn icon href="https://www.facebook.com/stripmanila/" target="_blank">

          <v-icon large color="purple darken-3">

          mdi-facebook

          </v-icon>

        </v-btn>
      </template>

       <!-- facebook browhaus-->
      <template v-else>
        <v-btn icon href="https://www.facebook.com/BrowhausManila/" target="_blank">

          <v-icon large color="lime darken-3">

          mdi-facebook

          </v-icon>

        </v-btn>
      </template>

      <!-- twitter strip-->
      <template v-if="store === 'strip'">
        <v-btn icon href="https://www.facebook.com/stripmanila/" target="_blank">

          <v-icon large color="purple darken-3">

          mdi-twitter

          </v-icon>

        </v-btn>
      </template>

      <!-- twitter browhaus-->
      <template v-else>
        <v-btn icon href="https://www.facebook.com/BrowhausManila/" target="_blank">

          <v-icon large color="lime darken-3">

          mdi-twitter

          </v-icon>

        </v-btn>
      </template>
      <!-- instagram strip-->
      <template v-if="store === 'strip'">
        <v-btn icon href="https://www.facebook.com/stripmanila/" target="_blank">

          <v-icon large color="purple darken-3">

          mdi-instagram

          </v-icon>

        </v-btn>
      </template>

       <!-- instagram browhaus-->
      <template v-else>
        <v-btn icon href="https://www.facebook.com/BrowhausManila/" target="_blank">

          <v-icon large color="lime darken-3">

          mdi-instagram

          </v-icon>

        </v-btn>
      </template>

      </v-app-bar>
  </v-app>
</template>

<script>
export default {
  props: {
    store: {
      type: String
    }
  }
}
</script>
