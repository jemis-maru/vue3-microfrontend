// store/routerStore.js
import { defineStore } from "pinia";
import { useRouter, useRoute } from "vue-router";

export const useRouterStore = defineStore("routerStore", () => {
  const router = useRouter();
  const route = useRoute();
  return { router, route };
});
