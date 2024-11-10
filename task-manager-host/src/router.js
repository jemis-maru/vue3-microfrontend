import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("tasklist/TaskListApp"),
  },
  {
    path: "/task/:id",
    component: () => import("taskdetail/TaskDetailApp"),
  },
  {
    path: "/add-task",
    component: () => import("addtask/AddTaskApp"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
