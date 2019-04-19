<template>
  <v-app class="grey lighten-4">
    <v-navigation-drawer fixed temporary app v-model="sideNav" style="width: 250px">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="justify-center" flat app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="font-weight-light">PHOTO</span>
          <span class="font-weight-dark"></span>STATION
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="text-uppercase grey--text"
          flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn class="text-uppercase grey--text" flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "home", title: "home", link: "/" },
        // { icon: 'lock', title: 'sign up', link: '/signup' },
        { icon: "lock", title: "prints", link: "/prints" },
        { icon: "lock", title: "photo services", link: "/services" },
        { icon: "wheel", title: "admin", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "home", title: "add product", link: "/products/add" },
          { icon: "shop", title: "special offers", link: "/products/offers" }
          // { icon: "shop", title: "meals & plans", link: "/programs" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Wire+One");
body {
  font-family: "Courier New", Courier, monospace;
  background: #dfdfdd;
}

html {
  overflow-y: scroll;
}
a {
  color: black;
}
a:hover {
  color: white;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  color: black;
  cursor: pointer;
}

.paragraphs {
  text-align: left;
}
.navbar-light .navbar-nav .nav-link {
  color: black;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.7);
}
</style>
