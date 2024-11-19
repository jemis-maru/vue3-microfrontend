<template>
  <div class="add-task-container">
    <h1 class="title">Add New Task</h1>
    <form @submit.prevent="addNewTask" class="task-form">
      <input
        v-model="newTask.name"
        class="task-input"
        placeholder="Task Name"
        required
      />
      <button type="submit" class="submit-button">Add Task</button>
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

<style scoped>
.add-task-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.task-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-input {
  width: 100%;
  max-width: 400px;
  padding: 12px 15px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.task-input:focus {
  border-color: #007bff;
}

.submit-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.submit-button:active {
  transform: scale(0.98);
}
</style>
