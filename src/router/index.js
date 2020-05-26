import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import AddDog from "../views/AddDog";
import DogList from "../views/DogList";
import Profile from "../views/Profile";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/dog-listing",
      name: "dog-list",
      component: DogList,
    },
    {
      path: "/add-dog",
      name: "add-dog",
      component: AddDog,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp,
    },
  ],
});
