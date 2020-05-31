import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedDogs: [
      {
        imageUrl: require("@/assets/dog-1.jpg"),
        id: "kljkljjjlj",
        title: "Roxy",
        dateOfBirth: "2016-01-02",
      },
      {
        imageUrl: require("@/assets/dog-2.jpg"),
        id: "kljklddsfjjlj",
        title: "Willi",
        dateOfBirth: "2017-02-02",
      },
      {
        imageUrl: require("@/assets/dog-3.jpg"),
        id: "kljklddsfjjlj3",
        title: "Susi",
        dateOfBirth: "2018-03-03",
      },
    ],
    user: {
      id: "kjdfkljdfk",
      savedDogs: ["kldjflkjdf"],
    },
  },
  mutation: {},
  actions: {},
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
