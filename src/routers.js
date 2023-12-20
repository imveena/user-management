
import HomeIndex from "./components/HomeIndex.vue"
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./components/LogIn.vue"
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateR from './components/UpdateR.vue'

const routes = [
    {
        name: "HomeIndex",
        component: HomeIndex,
        path: "/",
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "LogIn",
        component: LogIn,
        path: "/LogIn",
    },
    {
        name: "AddRestaurant",
        component: AddRestaurant,
        path: "/AddRestaurant",
    },
    {
        name: "UpdateR",
        component:UpdateR,
        path: "/updateR/:id",
    }
];

const router = createRouter({
        history: createWebHistory(),
        routes,

});
export default router;