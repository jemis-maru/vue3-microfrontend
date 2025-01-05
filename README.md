# Task Manager Microfrontend Setup

This guide provides step-by-step instructions to set up and run the Task Manager project using microfrontends, Vite, and Pinia.

## 📦 **Prerequisites**

Ensure the following are installed on your system:

- **Node.js** (v16 or higher)
- **NPM** (v7 or higher)

## 🚀 **Setup Steps**

### 1. Clone the Repository

```bash
git clone https://github.com/jemis-maru/vue3-microfrontend.git
```

### 2. Set Up Host Application

```bash
cd task-manager-host
npm install
npm run build-preview
```

### 3. Task List Microfrontend

```bash
cd task-list
npm install
npm run build-preview
```

### 4. Task Detail Microfrontend

```bash
cd task-detail
npm install
npm run build-preview
```

### 5. Add Task Microfrontend

```bash
cd add-task
npm install
npm run build-preview
```

### 6. Start the application

##### Open your browser and navigate to:

```bash
http://localhost:5000
```

### Happy Coding! 🚀
