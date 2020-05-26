<template>
  <v-app>
    <v-card>
      <v-app-bar dark class="text-uppercase primary">
        <v-app-bar-nav-icon
          @click="sideNav = !sideNav"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <span class="font-weight-light">Dog</span>
            <span class="font-weight-bold">Board</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            text
            v-for="item in menuItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer temporary dark app v-model="sideNav" color="primary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item-group color="text--white" v-model="item">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          activeClass="accent primary--text"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      sideNav: null,
      item: 1,
      menuItems: [
        { icon: "mdi-paw", title: "View Dogs", link: "/dog-listing" },
        { icon: "mdi-dog", title: "Add New Dog", link: "/add-dog" },
        { icon: "mdi-account", title: "Profile", link: "/profile" },
        { icon: "mdi-face", title: "Sign Up", link: "/sign-in" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/sign-up" },
      ],
    };
  },
};
</script>
