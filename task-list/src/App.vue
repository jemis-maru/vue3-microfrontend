<template>
  <div class="task-list-container">
    <h2 class="task-list-title">Task List</h2>
    <ul class="task-list">
      <li v-for="task in taskLists" :key="task.id" class="task-item">
        <div class="task-info">
          <router-link :to="`/task/${task.id}`" class="task-link">
            {{ task.name }}
          </router-link>
        </div>
        <button class="delete-button" @click="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>
    <div class="add-task">
      <router-link to="/add-task" class="add-task-button"
        >Add New Task</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
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

<style scoped>
/* Container Styling */
.task-list-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Title Styling */
.task-list-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Task List Styling */
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: #f9f9f9;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.task-item:hover {
  background: #f1f1f1;
}

/* Task Link Styling */
.task-link {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
}

.task-link:hover {
  text-decoration: underline;
}

/* Delete Button Styling */
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  background: #e63946;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Add Task Button */
.add-task {
  text-align: center;
  margin-top: 20px;
}

.add-task-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.add-task-button:hover {
  background-color: #0056b3;
}
</style>
