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
            >{{ button.text }}</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="10" lg="6">
        <v-carousel cycle style="cursor:pointer;">
          <v-carousel-item
            v-for="dog in dogs"
            :key="dog.id"
            :src="dog.imageUrl"
            @click="showSingleDog(dog.id)"
          >
            <div class="title">{{ dog.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  computed: {
    dogs() {
      return this.$store.getters.featuredDogs;
    },
  },
  data() {
    return {
      buttons: [
        { text: "Explore Dogs", link: "/dog-listing" },
        { text: "Add New Dog", link: "/add-dog" },
      ],
    };
  },
  methods: {
    showSingleDog: function(imageId) {
      console.log("I was clicked");
      this.$router.push({ name: "single-dog", params: { id: imageId } });
    },
  },
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
