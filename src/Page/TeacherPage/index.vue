<template>
  <div class="Teacher">
    <el-container>
      <el-aside width="200px" class="TeacherMenu">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>老师页面</el-header>
        <el-main>主要内容</el-main>
        <el-footer><FooterItem></FooterItem></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
  
<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain, ElFooter } from 'element-plus';
import { useRoute } from 'vue-router';
import Menu from './components/TeacherMenu.vue'
console.log(useRoute().params.id);

</script>
  
<style scoped>
.Teacher {
  position: relative;
  width: 100%;
  height: 100%;
}

.TeacherMenu {
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
  