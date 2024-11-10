<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="task in taskLists" :key="task.id">
        <router-link :to="`/task/${task.id}`">{{ task.name }}</router-link>
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
    <router-link to="/add-task">Add New Task</router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useTaskStore } from "task-manager-host/taskStore";

const taskStore = useTaskStore();
const taskLists = computed(() => {
  return taskStore.tasks;
});

// Function to delete task
function deleteTask(taskId) {
  taskStore.removeTask(taskId);
}
</script>
