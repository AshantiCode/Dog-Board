import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedDogs: [
      {
        imageUrl: require("@/assets/dog-1.jpg"),
        id: "1",
        title: "Roxy",
        description:
          "Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window.",
        age: "3",
      },
      {
        imageUrl: require("@/assets/dog-2.jpg"),
        id: "2",
        title: "Willi",
        description:
          "Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary.",
        age: "2",
      },
      {
        imageUrl: require("@/assets/dog-3.jpg"),
        id: "3",
        title: "Susi",
        description:
          "Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet.",
        age: "6",
      },
    ],
    user: {
      id: "kjdfkljdfk",
      savedDogs: ["kldjflkjdf"],
    },
  },
  mutations: {
    addDog(state, payload) {
      state.loadedDogs.push(payload);
    },
  },
  actions: {
    addDog({ commit }, payload) {
      const newDog = {
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl,
        age: payload.age,
      }; //up i will reach out to firebase later
      commit("addDog", newDog);
    },
  },
  getters: {
    loadedDogs(state) {
      return state.loadedDogs.sort((dogA, dogB) => {
        return dogA.dateOfBirth > dogB.dateOfBirth;
      });
    },
    featuredDogs(state, getters) {
      return getters.loadedDogs.slice(0, 5);
    },
    loadedDog(state) {
      return (dogId) => {
        return state.loadedDogs.find((dog) => {
          return dog.id == dogId;
        });
      };
    },
  },
});
