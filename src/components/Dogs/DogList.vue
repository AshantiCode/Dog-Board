<template>
  <v-container>
    <v-row>
      <v-col col="10" md="8" offset-md="2" lg="6" offset-lg="3">
        <v-card class="mb-10 accent" v-for="dog in dogs" :key="dog.id">
          <v-container fluid>
            <v-row>
              <v-col cols="5">
                <v-img :src="dog.imageUrl"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>
                  <div class="grey--text">
                    <h2 class="mb-5">I am {{ dog.title }}</h2>
                    <p>{{ dog.dateOfBirth }}</p>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    class="pa-5"
                    color="third white--text"
                    :to="'/dog-listing/' + dog.id"
                  >
                    View {{ dog.title }}
                    <v-icon class="arrow" right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    dogs() {
      return this.$store.getters.loadedDogs;
    },
  },
};
</script>

<style scoped>
.arrow:hover {
  transform: translateX(6px);
}
</style>
