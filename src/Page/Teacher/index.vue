<template>
    <div class="Teacher_Index">
      <el-container>
        <el-aside width="200px" class="Teacher_Indes_Menu">
          <Menu />
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Tabs</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </template>
  
  
  
  
  <script lang="ts" setup>
  import Menu from '../Teacher/components/Teacher_Menu.vue'
  
  </script>
  
  <style scoped>
  .Teacher_Index {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .Teacher_Indes_Menu {
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
  