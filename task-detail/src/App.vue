<template>
  <div>
    <h2>Task Details</h2>
    <p>{{ task.name }}</p>
    <input v-model="task.name" />
    <button @click="updateTask">Save Changes</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "task-manager-host/taskStore";
import { useRouterStore } from "task-manager-host/routerStore";

const taskStore = useTaskStore();
const routerStore = useRouterStore();

const task = ref({
  id: "",
  name: "",
});

const getTask = () => {
  const selectedTask = taskStore.tasks.find(
    (t) => t.id == routerStore.route.params.id
  );
  task.value = { ...selectedTask };
};

getTask();

function updateTask() {
  taskStore.updateTask(task.value);
  routerStore.router.push("/");
}
</script>
