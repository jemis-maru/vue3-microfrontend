<template>
  <div>
    <h1>Host Application</h1>
    <TaskList />
    <TaskDetail />
    <AddTask />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const isDev = import.meta.env.MODE === "development";

const TaskList = defineAsyncComponent(() =>
  isDev
    ? import("http://localhost:5174/src/App.vue")
    : import("tasklist/TaskListApp")
);
const TaskDetail = defineAsyncComponent(() =>
  isDev
    ? import("http://localhost:5175/src/App.vue")
    : import("taskdetail/TaskDetailApp")
);
const AddTask = defineAsyncComponent(() =>
  isDev
    ? import("http://localhost:5176/src/App.vue")
    : import("addtask/AddTaskApp")
);
</script>
