<script setup lang="ts">
import TableCard from "@/components/TableCard.vue";
import {ref} from "vue";

const props = defineProps(['tableData', 'tableHead'])

let selectValue = ref("")
let selectOptions = ref([])
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
      <table-card :table-data="tableData" :table-head="tableHead"></table-card>
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