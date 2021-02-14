import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = true

// development endpoint
// axios.defaults.baseURL = 'http://localhost:8000/api'

// production endpoint
axios.defaults.baseURL = 'https://harem-api-3dpac.ondigitalocean.app/api'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
