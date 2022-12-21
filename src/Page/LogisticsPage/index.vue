<template>
  <div class="Logisticsr">
    <el-container>
      <el-aside width="200px" class="LogisticsrMenu">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main><Main></Main></el-main>
        <el-footer style="background-color: cyan;">
          <div>
            <FooterItem></FooterItem>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain, ElFooter } from 'element-plus';
import { useRoute } from 'vue-router';
import Header from './components/LogisticsHeader.vue';
import Menu from './components/LogisticsMenu.vue'
import Main from './components/LogisticsMain.vue'
console.log(useRoute().params.id);
</script>
    
<style scoped>
.Logisticsr {
  position: relative;
  width: 100%;
  height: 100%;
}

.LogisticsrMenu {
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
    