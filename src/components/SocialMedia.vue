<template>

  <div>

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

      <v-btn icon href="https://twitter.com/stripmanila/" target="_blank">

        <v-icon large color="purple darken-3">

        mdi-twitter

        </v-icon>

      </v-btn>

    </template>

    <!-- twitter browhaus-->
    <template v-else>

      <v-btn icon href="https://twitter.com/browhausmanila" target="_blank">

        <v-icon large color="lime darken-3">

        mdi-twitter

        </v-icon>

      </v-btn>

    </template>

    <!-- instagram strip-->
    <template v-if="store === 'strip'">

      <v-btn icon href="https://www.instagram.com/stripmanila/" target="_blank">

        <v-icon large color="purple darken-3">

        mdi-instagram

        </v-icon>

      </v-btn>

    </template>

    <!-- instagram browhaus-->
    <template v-else>

      <v-btn icon href="https://www.instgram.com/BrowhausManila/" target="_blank">

        <v-icon large color="lime darken-3">

        mdi-instagram

        </v-icon>

      </v-btn>

    </template>

  </div>

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
