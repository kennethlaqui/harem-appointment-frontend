<template>

  <div>

    <v-container>

      <v-data-table
        :headers="headers"
        :items="appointments"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>

    </v-container>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Appointments',
  data () {
    return {
      appointments: [],
      headers: [
        { text: '#', value: 'cntrl_no', width: 80 },
        { text: 'Name', value: 'clnt_nme', width: 130 },
        { text: 'Email', value: 'emailadd', width: 130 },
        { text: 'Mobile Number', value: 'cel_numb', width: 150 },
        { text: 'Location', value: 'locn_nme', width: 130 },
        { text: 'Date', value: 'apnt_dte', width: 130 },
        { text: 'Time', value: 'mil_time', width: 130 },
        { text: 'Treatment', value: 'treatmnt', width: 130 },
        { text: 'Country', value: 'location' }
      ],
      stor_nme: process.env.VUE_APP_STORE_NAME
    }
  },
  methods: {
    retrieveAppointments () {
      axios.get('/appointments', {
        params: {
          stor_nme: this.stor_nme
        }
      })
        .then(response => {
          this.appointments = response.data
        })
    }
  },
  created () {
    this.retrieveAppointments()
  }
}
</script>
