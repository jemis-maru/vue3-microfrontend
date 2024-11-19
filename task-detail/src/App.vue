<template>
  <div class="task-details-container">
    <h2 class="title">Task Details</h2>
    <form @submit.prevent="updateTask" class="task-form">
      <label for="task-name" class="label">Task Name</label>
      <div class="input-container">
        <input
          id="task-name"
          v-model="task.name"
          class="task-input"
          placeholder="Enter Task Name"
        />
      </div>
      <button @click="updateTask" class="save-button">Save Changes</button>
    </form>
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

<style scoped>
.task-details-container {
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
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.task-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
  text-align: left;
}

.task-input {
  width: calc(100% - 31px);
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

.save-button {
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

.save-button:hover {
  background-color: #0056b3;
}

.save-button:active {
  transform: scale(0.98);
}
</style>
