<template>
  <v-app>
    <v-card flat class>
      <v-toolbar app dark class="text-uppercase primary">
        <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light">Dog</span>
          <span class="font-weight-bold">Board</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menuItems" :key="item.title">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer temporary dark app v-model="sideNav" color="primary">
      <v-list-item>
        <v-list-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group v-model="menuItems">
          <v-list-item v-for="item in menuItems" :key="item.title">
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "mdi-paw", title: "View Dogs" },
        { icon: "mdi-dog", title: "Add New Dog" },
        { icon: "mdi-account", title: "Profile" },
        { icon: "mdi-face", title: "Sign Up" },
        { icon: "mdi-lock-open", title: "Sign In" }
      ]
    };
  }
};
</script>
