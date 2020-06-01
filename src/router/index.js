import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import AddDog from "../components/Dogs/AddDog";
import DogList from "../components/Dogs/DogList";
import Profile from "../components/User/Profile";
import SignIn from "../components/User/SignIn";
import SignUp from "../components/User/SignUp";
import SingleDog from "../components/Dogs/SingleDog";

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
      path: "/dog-listing/:id",
      name: "single-dog",
      props: true,
      component: SingleDog,
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
