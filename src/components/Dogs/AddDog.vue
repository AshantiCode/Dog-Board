<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h3 class="page-title">Add a new Dog</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <form @submit.prevent="onAddDog">
          <v-row>
            <v-col>
              <v-text-field
                v-model="title"
                name="title"
                id="title"
                :counter="10"
                label="Whats the dog name?*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="description"
                name="description"
                id="description"
                :counter="200"
                label="Say something about that dog*"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-slider v-model="age" color="primary" label="Age*" min="1" max="15" thumb-label></v-slider>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="6">
              <v-text-field
                v-model="imageUrl"
                name="imageUrl"
                id="image-url"
                label="Image URL*"
                required
              ></v-text-field>
            </v-col>

            <v-col sm="6">
              <img :src="imageUrl" width="280" />
            </v-col>
          </v-row>

          <v-row class="text-right">
            <v-col>
              <v-btn type="submit" class="third white--text px-8" :disabled="!formIsValid">Add Dog</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      age: "",
      imageUrl: ""
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.age
      );
    }
  },
  methods: {
    onAddDog() {
      if (!this.formIsValid) {
        return;
      }
      const newDogData = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        age: this.age
      };
      this.$store.dispatch("addDog", newDogData);
      this.$router.push({ name: "dog-list" });
    }
  }
};
</script>
 
 <style scoped>
.page-title {
  font-size: 3rem;
  color: grey;
}
</style>