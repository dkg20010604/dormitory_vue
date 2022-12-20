<template>
    <el-container class="my-layout" style="height: 100%">
        <el-aside width="200px">
            <el-scrollbar style="height: 100%;">
                <el-menu default-active="2" class="main-menu" @open="handleOpen" @close="handleClose" @select="select"
                    style="height: 100%;">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            </el-header>

            <el-main>
                <el-scrollbar>
                </el-scrollbar>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
    console.log( keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const select=(key: string)=>{
    console.log(key)
}
</script>
  
<style scoped>
.my-layout .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.my-layout .el-aside {
    color: var(--el-text-color-primary);
    /* background: var(--el-color-primary-light-8); */
    height: 100%;
}

.my-layout .el-menu {
    border-right: none;
}

.my-layout .el-main {
    padding: 0;
}

.my-layout .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.el-scrollbar__view {
    height: 100%;
}
</style>
  