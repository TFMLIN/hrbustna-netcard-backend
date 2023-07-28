<script setup lang="ts">

const props = defineProps(['tableData', 'tableHead'])

function edit(id) {
  console.log("edit", id)
}

function handleEdit() {
  console.log("handleEdit")
}

</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection"></el-table-column>
    <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item.label" :prop="item.property" width="auto"></el-table-column>
    <el-table-column>
      <template v-slot="scope">
        <el-button type="primary" @click="edit(scope.row.id)" plain>编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>