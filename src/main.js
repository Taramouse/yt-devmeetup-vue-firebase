import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialogue from './components/Meetup/Edit/EditMeetupDetailsDialogue.vue'
import EditMeetupDateDialogue from './components/Meetup/Edit/EditMeetupDateDialogue.vue'
import EditMeetupTimeDialogue from './components/Meetup/Edit/EditMeetupTimeDialogue.vue'
import RegisterDialogue from './components/Meetup/Register/RegisterDialogue.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialogue', EditMeetupDetailsDialogue)
Vue.component('app-edit-meetup-date-dialogue', EditMeetupDateDialogue)
Vue.component('app-edit-meetup-time-dialogue', EditMeetupTimeDialogue)
Vue.component('app-meetup-register-dialogue', RegisterDialogue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcQk8pboNESpgvq1BWCli1M25T7DcwZfw',
      authDomain: 'devmeetups-231b4.firebaseapp.com',
      databaseURL: 'https://devmeetups-231b4.firebaseio.com/',
      projectId: 'devmeetups-231b4',
      storageBucket: 'gs://devmeetups-231b4.appspot.com',
      messagingSenderId: '224135136095'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
