<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
        default-active="Welcome" text-color="#fff" @select="select">
        <el-menu-item index="Welcome">
            <el-icon>
                <House />
            </el-icon>
            <template #title>欢迎使用</template>
        </el-menu-item>
        <el-menu-item index="Employee">
            <el-icon>
                <Calendar />
            </el-icon>
            <template #title>员工管理</template>
        </el-menu-item>
        <el-menu-item index="ToDoList">
            <el-icon>
                <Memo />
            </el-icon>
            <template #title>待办事项</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { RouteLink } from '@/stores/route'
import { House, Calendar, Memo } from '@element-plus/icons-vue'
//更改el-menu-item中的index为路由名称可跳转路由
const select = (key: string) => {
    RouteLink().route = key
}
</script>
