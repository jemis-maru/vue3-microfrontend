<template>
  <div>
    <h1>Host Application</h1>
    <RemoteComponent />
    <RemoteComponent2 />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const RemoteComponent = defineAsyncComponent(() =>
  import('microfrontend1/FirstApp')
);
const RemoteComponent2 = defineAsyncComponent(() =>
  import('microfrontend2/SecondApp')
);
</script>
