<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
}
#app {
  max-width: unset;
  padding: 0;
  margin: 0 0 0 0;
  height: 100vh;
  grid-template-columns: 100vw;
}
#menu {
}
</style>
