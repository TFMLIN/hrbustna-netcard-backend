<script setup lang="ts">
import TableCard from "@/components/TableCard.vue";
import axios from "axios";
import { userInfoStore } from "@/stores/userinfo";
const store = userInfoStore()
axios.interceptors.request.use(function (config) {
  let token = store.getToken()
  if (token) {
    config.headers['Authorization'] = `Basic ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

import {ref} from "vue";
import AdminTable from "@/components/AdminTable.vue";

let distList = ref([])
axios.get('http://localhost:8080/backend/dist/list')
    .then(function (response) {
      console.log(response.data)
      distList.value = response.data.data
      console.log(distList.value)
    }).catch(function (error) {
  console.log(error)
})

let tableHead = ref([])
axios.get('http://localhost:8080/backend/dist/table-header')
    .then(function (response) {
      tableHead.value = response.data.data['list']
    }).catch(function (error) {
  console.log(error)
})

</script>

<template>
  <admin-table :table-head="tableHead" :table-data="distList"></admin-table>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
}
</style>