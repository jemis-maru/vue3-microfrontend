import { createRouter, createWebHistory } from "vue-router";

const isDev = import.meta.env.MODE === "development";

const routes = [
  {
    path: "/",
    component: () =>
      isDev
        ? import("http://localhost:5174/src/App.vue")
        : import("tasklist/TaskListApp"),
  },
  {
    path: "/task/:id",
    component: () =>
      isDev
        ? import("http://localhost:5175/src/App.vue")
        : import("taskdetail/TaskDetailApp"),
  },
  {
    path: "/add-task",
    component: () =>
      isDev
        ? import("http://localhost:5176/src/App.vue")
        : import("addtask/AddTaskApp"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
