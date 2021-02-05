<template>

  <v-app>

    <!-- strip -->
    <Strip v-if="stor_nme === 'strip'" :store="stor_nme" />

    <!-- browhaus -->
    <Browhaus v-else :store="stor_nme"/>

  </v-app>

</template>

<script>
import Strip from '../components/Strip.vue'
import Browhaus from '../components/Browhaus.vue'

export default {
  name: 'Form',
  components: {
    Strip,
    Browhaus
  },
  data () {
    return {
      stor_nme: 'strip'
    }
  }
}
</script>
