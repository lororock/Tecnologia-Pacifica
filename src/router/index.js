import { createRouter, createWebHistory } from "vue-router";
import { usePageNameStore } from "../stores/pageName";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TecnologiaPacificaView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("pacifico");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/inventas",
      name: "inventas",
      component: () => import("../views/InventasView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("inventas");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/artesanias",
      name: "artesanias",
      component: () => import("../views/ArtesaniasView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("artesanias");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/design",
      name: "design",
      component: () => import("../views/DesignView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("design");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/chango",
      name: "chango",
      component: () => import("../views/ChanGoProView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("chango");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/politicaPrivacidad",
      name: "politicaPrivacidad",
      component: () => import("../views/PrivacidadPoliticas.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("pacifico");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/terminosCondiciones",
      name: "terminosCondiciones",
      component: () => import("../views/TerminosCondiciones.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("pacifico");
        pageNameStore.scrollToTop();
        next();
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
      beforeEnter: (to, from, next) => {
        const pageNameStore = usePageNameStore();
        pageNameStore.setPageName("NotFound");
        pageNameStore.scrollToTop();
        next();
      },
    },
  ],
});

export default router;
