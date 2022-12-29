<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
        :default-active="Employee" text-color="#fff" @select="select">
        <el-menu-item index="Employee">员工管理</el-menu-item>
        <el-menu-item index="ToDoList">待办事项</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { RouteLink } from '@/stores/route'
let Employee = 'Employee'
//更改el-menu-item中的index可进行自定义操作
const select = (key: string) => {
        RouteLink().route = key
}
</script>
