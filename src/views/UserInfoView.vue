<script setup lang="ts">
import router from "@/router";
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

let userList = ref([])
axios.get('http://localhost:8080/backend/user/list?page_size=5&page=1')
    .then(function (response) {
      console.log(response.data)
      userList.value = response.data.data
      console.log(userList.value)
    }).catch(function (error) {
  console.log(error)
  console.log(error.response.status);
  if (error.response.status == 401) {
    router.push("/")
  }
})

let tableHead = ref([])
axios.get('http://localhost:8080/backend/user/table-header')
    .then(function (response) {
      tableHead.value = response.data.data['list']
    }).catch(function (error) {
  console.log(error)
})

import { reactive } from 'vue'
import EditCard from "@/components/EditCard.vue";

function test(data) {
  console.log(data)
}


</script>

<template>

  <admin-table style="z-index: 0" :table-head="tableHead" :table-data="userList"></admin-table>
  <el-button @handleSave="test">测试按钮</el-button>
  <edit-card show="true" @handle-save="test"></edit-card>
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