import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import TabRoot from './views/TabRoot.vue';
import AboutView from './views/AboutView.vue';
import HomeDetailPage from './views/HomeDetailPage.vue'

import App from "./App.vue";
import "./style.css";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tabs/home",
    },
    {
      path: "/tabs",
      component: TabRoot,
      name: "tabs",
      children: [
        {
          path: "home",
          name: "home",
          components: {
            default: TabRoot,
            tabs: HomeView,
          },
        },
        {
          path: "home-detail",
          name: "home-detail",
          components: {
            default: TabRoot,
            tabs: HomeDetailPage,
          },
        },
        {
          path: "about",
          name: "about",

          components: {
            default: TabRoot,
            tabs: AboutView,
          },
        },
      ],
    },
  ],
});

createApp(App).use(router).mount("#app");
