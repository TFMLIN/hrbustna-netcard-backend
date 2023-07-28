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

let itemList = ref([])
axios.get('http://localhost:8080/backend/item/list?from=1&to=8')
    .then(function (response) {
      console.log(response.data)
      itemList.value = response.data.data
      console.log(itemList.value)
    }).catch(function (error) {
  console.log(error)
})

let tableHead = ref([])
axios.get('http://localhost:8080/backend/item/table-header')
    .then(function (response) {
      tableHead.value = response.data.data['list']
    }).catch(function (error) {
  console.log(error)
})

let selectValue = ref("")
let selectOptions = ref([
  {
    "value":"1",
    "label":"11"
  },
  {
    "value":"2",
    "label":"22",
  }
])
let searchInput = ref("")

function search() {
  let select = selectValue
  let content = searchInput
  console.log(select.value)
  console.log(content.value)
}

</script>

<template>
  <el-main>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-select v-model="selectValue" class="m-2" placeholder="Select" style="width: 20%">
            <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
          <el-input v-model="searchInput" placeholder="Please input" style="width: 50%"/>
          <el-button class="button el-button--primary" text @click="search">查找</el-button>
        </div>
      </template>
      <table-card :table-data="itemList" :table-head="tableHead"></table-card>
    </el-card>
  </el-main>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
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