import { createRouter, createWebHistory } from "vue-router";
import Compress from "../views/Compress.vue";

const routes = [
    {
        path: "/",
        name: "Compress",
        component: Compress       
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;