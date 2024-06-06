import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainview",
      component: MainView,
    },

    //router cho users
    {
      path: "/user",
      component: () => import("../views/user/MainUserView.vue"),
      children: [
        {
          path: "about",
          name: "user_about",
          component: () => import("../views/user/AboutUserView.vue"),
        },
        {
          path: "contact",
          name: "user_contact",
          component: () => import("../views/user/ContactUserView.vue"),
        },
        {
          path: "posts/:id/:slug",
          name: "user_posts",
          component: () => import("../views/user/PostUserView.vue"),
        },
      ],
    },
    //router cho admin
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/AppAdmin.vue"),
      children: [
        {
          path: "post",
          name: "post_admin",
          component: () =>
            import("../views/admin/childrenSection/PostSectionAdmin.vue"),
        },
      ],
    },
    // {
    //   path: '*',
    //   redirect: '/user'
    // }
  ],
});

export default router;
