<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router from "@/router";

function openDashboard() {
  router.push('/admin/dashboard')
}

function userManage() {
  router.push('/admin/user')
}

function itemManage() {
  router.push('/admin/item')
}

function distManage() {
  router.push('/admin/dist')
}

function orderManage() {
  router.push('/admin/order')
}
</script>

<template>
    <div id="menu-bar">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="1"
              text-color="#fff"
          >
            <el-menu-item index="1" @click="openDashboard">
              <el-icon><icon-menu /></el-icon>
              <span>仪表盘</span>
            </el-menu-item>
            <el-menu-item index="2" @click="userManage">
              <el-icon><document /></el-icon>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="3" @click="itemManage">
              <el-icon><document /></el-icon>
              <span>商品管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="distManage">
              <el-icon><setting /></el-icon>
              <span>分销管理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="orderManage">
              <el-icon><setting /></el-icon>
              <span>订单管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

</template>

<style scoped>
 .el-row{
   border-color: #545c64;
   height: 100%;
}
 .el-menu {
   height: 100%;
   height: 100%;
 }
</style>