<template>
  <el-config-provider :locale="zhCn" style="width: 100%;
    height: 100%;">
    <RouterView/>
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style>
</style>