<template>
    <div class="Student">
      <el-container>
        <el-aside width="200px" class="StudentMenu">
          <Menu />
        </el-aside>
        <el-container>
          <el-header>学生</el-header>
          <el-main>主要内容</el-main>
          <el-footer style="background-color: cyan;"><FooterItem></FooterItem></el-footer>
        </el-container>
      </el-container>
    </div>
  </template>
    
  <script lang="ts" setup>
  import { ElContainer, ElAside, ElHeader, ElMain, ElFooter } from 'element-plus';
  import { useRoute } from 'vue-router';
  import Menu from './components/StudentMeun.vue'
  console.log(useRoute().params.id);
  </script>
    
  <style scoped>
  .Student {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .StudentMenu {
    background-color: #545c64;
    height: 100%;
  
  }
  
  .el-container {
    height: 100%
  }
  
  .el-header {
    padding-left: 0px;
    padding-right: 0px;
  }
  
  :deep(ul.el-menu) {
    border-right-width: 0px
  }
  </style>
    