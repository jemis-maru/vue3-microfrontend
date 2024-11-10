<template>
  <div>
    <h1>Host Application</h1>
    <RemoteComponent />
    <RemoteComponent2 />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const isDev = import.meta.env.MODE === "development";

const RemoteComponent = defineAsyncComponent(() =>
  isDev
    ? import("http://localhost:5174/src/App.vue")
    : import("microfrontend1/FirstApp")
);
const RemoteComponent2 = defineAsyncComponent(() =>
  isDev
    ? import("http://localhost:5175/src/App.vue")
    : import("microfrontend2/SecondApp")
);
</script>
