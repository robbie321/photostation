import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import * as firebase from "firebase";
import { store } from "./store";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    //initialise firebase
    firebase.initializeApp({
      apiKey: "AIzaSyD7cYINFokh7QHoEj6vwhNL8tMfzgRVX_w",
      authDomain: "paulscully.firebaseapp.com",
      databaseURL: "https://paulscully-61300.firebaseio.com/",
      projectId: "paulscully-61300",
      storageBucket: ""
    });
    //wont use this yet
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.$store.dispatch("autoSignIn", user);
    //     this.$store.dispatch("fetchUserData");
    //   }
    // });
  }
}).$mount("#app");
