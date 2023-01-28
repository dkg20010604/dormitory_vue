<template>
  <div class="Logisticsr">
    <el-container>
      <el-aside width="200px" class="LogisticsrMenu">
        <Menu />
      </el-aside>
      <el-container>
        <div>
          <el-header>
            <Header></Header>
          </el-header>
        </div>
        <hr style="color: aqua;height: 1px;background-color: aqua;" />
        <el-main>
          <RouterView></RouterView>
        </el-main>
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
import { RouteLink } from '../../stores/route'
import { ElContainer, ElAside, ElHeader, ElMain, ElFooter, ElMessage } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
import Header from './components/LogisticsHeader.vue';
import Menu from './components/LogisticsMenu.vue'
import router from '@/router';
console.log(useRoute().params.id);
watch(
  () => RouteLink().route,
  () => {
    router.push({
      name: RouteLink().route,
    })
    RouteLink().hub.send("SendMessage", "nihaop")
  }
)
//const hub=new signalR.HubConnectionBuilder().withUrl('http://localhost:4641/chathub').configureLogging(signalR.LogLevel.Error).build()
onMounted(() => {
  RouteLink().hub.on('getmessagr', (data) => {
    ElMessage({
      message: data
    })
  })
  useRouter().push({
    name: 'Welcome'
  })
  RouteLink().begenconn()
  const methods = ['getmessagr']
  const func =
    [
      (data: any) => {
        ElMessage({
          message: data
        })
      }
    ]
  RouteLink().starconn(methods, func)
  // hub.start().then(()=>{
  //   console.log('成功');

  // }).catch(()=>{
  //   console.log('失败');
  // })
})
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
