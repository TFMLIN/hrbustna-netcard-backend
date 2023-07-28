<script setup lang="ts">

import MenuBar from "@/components/MenuBar.vue";
import AdminHeader from "@/components/AdminHeader.vue";
</script>

<template>
<div id="admin">
  <menu-bar></menu-bar>
  <el-container>
    <el-header>
      <admin-header></admin-header>
    </el-header>
    <router-view></router-view>
  </el-container>

</div>

</template>

<style scoped>
#admin {
  display: grid;
  max-width: unset;
  padding: 0;
  margin: 0 0 0 0;
  height: 100vh;
  grid-template-columns: 10vw 90vw;
}
#admin-right {

}
</style>