<template>

  <div>

    <v-container>

      <v-card
        class="mx-auto mt-5"
        max-width="500"
        :loading="loading"
      >

        <!-- app bar -->
        <v-app-bar
          elevation="4"
          color="#c5003e"
          dark
          height="100"
        >

          <v-app-bar-title>Browhaus Appointment Time</v-app-bar-title>

          <v-spacer />

          <div class="mr-2">

            <v-btn
              icon
              text
              @click="toggleTheme"
            >

              <v-icon v-if="this.$vuetify.theme.dark">mdi-brightness-4</v-icon>

              <v-icon v-else>mdi-brightness-5</v-icon>

            </v-btn>

          </div>

          <!-- <v-icon
            color="purple darken-3"
            large
          > -->

            <!-- mdi-account -->

          <!-- </v-icon> -->

        </v-app-bar>
        <!-- end of app bar -->

        <v-card-text>

          <v-container>

            <v-form
              ref="form"
              v-model="formHasErrors"
              lazy-validation
            >

              <!-- name -->
              <v-row>

                <v-col cols="12">

                  <v-text-field
                    v-model="form.clnt_nme"
                    :rules="rules.clnt_nme"
                    outlined
                    dense
                    label="Name"
                    required
                  />

                </v-col>

              </v-row>

              <!-- email -->
              <v-row class="mt-n5">

                <v-col cols="6">

                  <v-text-field
                    v-model="form.emailadd"
                    :rules="rules.emailadd"
                    outlined
                    dense
                    label="Email"
                    required
                  />

                </v-col>

              <!-- mobile number -->
              <v-col cols="6">

                <v-text-field
                  v-model="form.cel_numb"
                  :rules="rules.cel_numb"
                  maxlength="11"
                  counter
                  outlined
                  dense
                  label="Mobile Number"
                />

              </v-col>

              </v-row>

              <!-- locations -->
              <v-row class="mt-n5">

                <v-col cols="12">

                <v-select
                  v-model="form.locn_cde"
                  :items="locations"
                  item-text="locn_nme"
                  item-value="locn_cde"
                  :rules="[value => !!value || 'Location is required']"
                  @change="retrieveLocationTime"
                  outlined
                  dense
                  label="Store Location"
                ></v-select>

                </v-col>

              </v-row>

              <!-- appointment date -->
              <v-row class="mt-n5">

                <v-col cols="6">

                  <!-- <v-text-field
                    outlined
                    dense
                    label="Date"
                  /> -->

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
                        v-model="form.apnt_dte"
                        :rules="[value => !!value || 'Appointment date is required']"
                        label="Date"
                        outlined
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.apnt_dte"
                      :min="this.dateToday"
                      @input="apnt_dte_Menu = false, dayNumber, retrieveLocationTime()"
                    >
                    </v-date-picker>
                  </v-menu>

                </v-col>

                <!-- time -->
                <v-col cols="6">

                  <v-select
                    v-model="form.apnt_tme"
                    :items="locationTime"
                    item-text="std_time"
                    item-value="mil_time"
                    :rules="[v => !!v || 'Appointment time is required']"
                    outlined
                    dense
                    label="Time"
                  />

                </v-col>

              </v-row>

              <!-- treatment -->
              <v-row class="mt-n5">

                <v-col cols="12">

                  <v-text-field
                    v-model="form.treatmnt"
                    outlined
                    dense
                    label="Treatment"
                  />

                </v-col>

              </v-row>

              <v-row class="mt-n5">

                <v-col cols="12">

                  <v-textarea
                    v-model="form.message_"
                    outlined
                    label="Message"
                    counter
                    :rules="rules.message"
                  />

                </v-col>

              </v-row>

              <!-- submit -->
              <v-card-actions class="mt-n5">

                <v-spacer />

                <v-btn @click="reset" small>

                  Reset

                </v-btn>

                <v-btn @click="submit" small :disabled="!formHasErrors || btn_disabled" >

                  Submit

                </v-btn>

              </v-card-actions>

            </v-form>

          </v-container>

        </v-card-text>

      </v-card>

      <!-- <v-row>

        <v-col>

          <h4 class="text-justify.text-center">
            <a href="#">
              You can also make an appointment with Strip. Click here!
            </a>
          </h4>

        </v-col>

      </v-row> -->

      <!-- message -->
      <v-snackbar
        v-model="snackbar"
        :multi-line="multiLine"
      >

        {{ snackbarText }}

        <template v-slot:action="{ attrs }">

          <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >

            Close

          </v-btn>

        </template>

      </v-snackbar>

    </v-container>

  </div>

</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Appointment-Form',
  props: {
    store: {
      type: String
    }
  },
  data () {
    return {
      rules: {
        required: value => !!value || 'Required.',
        clnt_nme: [
          value => !!value || 'Name is required.',
          value => value.length <= 25 || 'Name must be less than 25 characters'
        ],
        cel_numb: [
          value => /^[0-9]+$/.test(value) || 'Must be number.',
          value => !!value || 'Mobile number is required.',
          value => value.length === 11 || 'Mobile number must be 11 digits'
        ],
        emailadd: [
          value => !!value || 'E-mail is required',
          value => /.+@.+\..+/.test(value) || 'E-mail must be valid'
        ],
        message_: [value => value.length <= 25 || 'Max 25 characters']
      },
      locationTime: [],
      locations: [],
      formHasErrors: false,
      apnt_dte_Menu: false,
      btn_disabled: false,
      multiLine: true,
      snackbar: false,
      loading: false,
      errors: [],
      snackbarText: 'Thank you for making an appointment with us! We will contact you for confirmation shortly.',
      form: {
        clnt_nme: '',
        emailadd: '',
        cel_numb: '',
        locn_cde: '',
        apnt_dte: moment().add(1, 'days').format('YYYY-MM-DD'),
        apnt_tme: '',
        treatmnt: '',
        message_: '',
        stor_nme: this.store
      }
    }
  },
  computed: {
    dayNumber () {
      var date = new Date(this.form.apnt_dte)
      return date.getDay()
    },
    dateToday () {
      return moment().add(1, 'days').format('YYYY-MM-DD')
    }
    // title () {
    //   return process.env.VUE_APP_STORE_NAME.charAt(0).toUpperCase() + process.env.VUE_APP_STORE_NAME.slice(1)
    // }
  },
  methods: {
    retrieveLocations () {
      axios.get('/locations', {
        params: {
          stor_nme: this.store
        }
      })
        .then(response => {
          this.locations = response.data
        })
    },
    retrieveLocationTime () {
      axios.get('/time', {
        params: {
          locn_cde: this.form.locn_cde,
          day_numb: this.dayNumber
        }
      })
        .then(response => {
          this.locationTime = response.data
        })
    },
    submit () {
      this.$refs.form.validate() ? this.save() : this.formHasErrors = true
    },
    save () {
      this.loading = true
      this.btn_disabled = true
      axios.post('/appointment/create', this.form)
        .then(() => {
          this.loading = false
          this.snackbar = true
          this.$refs.form.reset()
          this.btn_disabled = false
        })
        .catch(e => {
          // const backendErrors = e.response.data.errors
          // this.errors.push(backendErrors)
          this.btn_disabled = true
        })
    },
    reset () {
      this.$refs.form.reset()
      this.form.apnt_dte = this.dateToday
    },
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  created () {
    this.retrieveLocations()
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/gotham');

  .v-text-field {
    font-family: 'Gotham', sans-serif;
  }

</style>
