<template>

  <div>

    <!-- appointment date -->
    <v-row class="mt-n5">

      <v-col cols="6">

        <v-menu
          v-model="apnt_dte_Menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="apnt_dte"
              label="Date"
              outlined
              readonly
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="apnt_dte"
            @input="apnt_dte_Menu = false"
          ></v-date-picker>
        </v-menu>

      </v-col>

      <v-col cols="6">

        <v-text-field
          outlined
          dense
          label="Time"
        />

      </v-col>

    </v-row>

  </div>

</template>

<script>
export default {
  data () {
    return {
      apnt_dte_Menu: false,
      apnt_dte: new Date().toISOString().substr(0, 10)
    }
  }
}
</script>
