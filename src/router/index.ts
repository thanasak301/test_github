import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import ManageActivities from "../views/ManageActivities.vue";
import UpdateActivities from "../views/UpdateActivities.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
        path:"/manage-activity",
        component:ManageActivities
    },
    {
      path:"/update-activity",
        component:UpdateActivities
        
    },
  ],
});

export default router;
