<template>
  <v-container>
    <v-row>
      <v-col cols="10" sm="6" offset-md="3">
        <v-card>
          <v-card-title primary-title>
            <h4 class="primary--text">Hi, I am {{dogs.title}}</h4>
          </v-card-title>
          <v-img :src="dogs.imageUrl" height="400px"></v-img>
          <v-card-subtitle class="third--text">I am {{dogs.age}} years old :D</v-card-subtitle>
          <v-card-text>{{dogs.description}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="third white--text" class="pa-5">Save To Favorite</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    dogs() {
      return this.$store.getters.loadedDog(this.id);
    }
  }
};
</script>
