<script setup lang="ts">

import {reactive} from "vue";

const props = defineProps(['show', 'formLabel'])
const emit = defineEmits(['handleSave'])

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})

function handleSave() {
  emit('handleSave', 'testdata')
}

</script>

<template>
  <el-card class="custom-card" shadow="always" v-show="show">
    <template #header>
      <div class="card-header">
        <span>编辑信息</span>
        <el-button class="button" text @click="handleSave">保存</el-button>
      </div>
    </template>
    <el-form
        :label-position="'left'"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
    >
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
.custom-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 20%;
  position: absolute;
  top: 30%;
  z-index: 1;
  left: 40%;
}
</style>