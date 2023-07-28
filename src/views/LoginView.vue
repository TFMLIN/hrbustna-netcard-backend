<script setup lang="ts">
import { reactive } from 'vue'
import { inject } from 'vue'
const axios: any = inject('axios')
import { userInfoStore } from '@/stores/userinfo'
import router from "@/router";
const userInfo = userInfoStore()

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const onSubmit = () => {
  axios.post('http://localhost:8080/backend/login', form)
      .then(function (response: {data: any}) {
        // console.log(response.data)
        // console.log(response.data.data.token)
        userInfo.setToken(response.data.data.token)
        console.log(userInfo.getToken())
        router.push('/admin/dashboard')

      }).catch(function (error: {data: any}) {
        console.log(error)
      })
}
</script>

<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>管理员登录</span>
        </div>
      </template>
      <el-form autocapitalize="off">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
}
#form {

}
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
  width: 480px;
}
el-form-item{
  width: 95%;
  margin: auto;
}
</style>