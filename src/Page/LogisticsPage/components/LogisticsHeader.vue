<template>
    <div style="overflow: hidden;display: flex;height: 100%;margin: auto;">
        <el-descriptions :column="10" style="width: 80%;margin-left: 1%;margin-top: 1%;display: inline;">
            <el-descriptions-item v-bind:label="time">{{ userInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="手机号:">{{ userInfo.phone }}</el-descriptions-item>
            <el-descriptions-item label="职务:">{{ userInfo.post }}</el-descriptions-item>
            <el-descriptions-item>{{ userInfo.post }}</el-descriptions-item>
        </el-descriptions>
        <el-badge :value="12" style="margin-top: 1%;">
            <el-button>
                <template #default>
                    <el-icon size="large" ><Notification /></el-icon>
                </template>
                
            </el-button>
        </el-badge>
    </div>

</template>
<script lang="ts" setup>
import { Notification } from '@element-plus/icons-vue'
const time = new Date().getHours() > 12 ? '下午好：' : '上午好：'
const userInfo = reactive({
    name: '' as string,
    phone: '' as string,
    post: '' as string,
    local: '' as string
})
</script>