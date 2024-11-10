<template>
  <div>
    <h1>Add New Task</h1>
    <form @submit.prevent="addNewTask">
      <input v-model="newTask.name" placeholder="Task Name" required />
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script setup>
import { useTaskStore } from "task-manager-host/taskStore";
import { ref } from "vue";
import { useRouterStore } from "task-manager-host/routerStore";

const taskStore = useTaskStore();
const routerStore = useRouterStore();

const newTask = ref({ name: "" });

function addNewTask() {
  taskStore.addTask({
    name: newTask.value.name,
    id: taskStore.tasks.length + 1,
  });
  newTask.value = { name: "" }; // Reset form

  routerStore.router.push("/");
}
</script>
