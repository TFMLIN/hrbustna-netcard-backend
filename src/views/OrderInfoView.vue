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

let orderList = ref([])
axios.get('http://localhost:8080/backend/order/list?page_size=5&page=1')
    .then(function (response) {
      orderList.value = response.data.data
    }).catch(function (error) {
  console.log(error)
})

let tableHead = ref([])
axios.get('http://localhost:8080/backend/order/table-header')
    .then(function (response) {
      tableHead.value = response.data.data['list']
    }).catch(function (error) {
      console.log(error)
})

//
// let tableHead = [
//   {
//     label: 'id',
//     property: 'id',
//   },
//   {
//     label: '用户编号',
//     property: 'user_id'
//   },
//   {
//     label: '地址编号',
//     property: 'address_id'
//   },
//   {
//     label: '商品编号',
//     property: 'item_id'
//   },
//   {
//     label: '花费',
//     property: 'cost'
//   },
//   {
//     label: '状态',
//     property: 'status'
//   },
//   {
//     label: '下单时间',
//     property: 'order_time'
//   },
// ]

</script>

<template>
  <el-main>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>

      <table-card :table-data="orderList" :table-head="tableHead"></table-card>
    </el-card>
  </el-main>
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