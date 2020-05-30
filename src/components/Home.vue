<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-btn
            dark
            class="ma-5 third"
            v-for="button in buttons"
            :key="button.title"
            large
            router
            :to="button.link"
          >{{button.text}}</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="10" lg="6">
        <v-carousel cycle touch>
          <v-carousel-item v-for="dog in dogs" :key="dog.id" :src="dog.imageUrl">
            <div class="title">{{ dog.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        { text: "Explore Dogs", link: "/dog-listing" },
        { text: "Add New Dog", link: "/add-dog" }
      ],
      dogs: [
        {
          imageUrl: require("@/assets/dog-1.jpg"),
          id: "kljkljjjlj",
          title: "Roxy wants a home"
        },
        {
          imageUrl: require("@/assets/dog-2.jpg"),
          id: "kljklddsfjjlj",
          title: "Willi is super sweet"
        },
        {
          imageUrl: require("@/assets/dog-3.jpg"),
          id: "kljklddsfjjlj3",
          title: "Susi is waiting for you!"
        }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
}
</style>
