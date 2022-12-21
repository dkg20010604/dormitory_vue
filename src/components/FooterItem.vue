<template>
    <!-- <div style=" width: 100%;height: 100;">
        <el-link href="https://github.com/dkg20010604/dormitory_vue" target="_blank">Github页面</el-link>
        <el-link href="https://element.eleme.io" target="_blank">default</el-link>
    </div> -->
    <el-row justify="center">
        <el-col :span="2">外部链接：</el-col>
        <el-col :span="2"><el-link href="https://github.com/dkg20010604/dormitory_vue"
                target="_blank">Github</el-link></el-col>
        <el-col :span="4"><el-link href="https://element-plus.org/zh-CN/#/zh-CN"
                target="_blank">Element-Plus</el-link></el-col>
    </el-row>
    <el-row justify="center">
        <el-col>
            <p style="display:flex;align-items: center;">By：张楠团队</p>
        </el-col>
    </el-row>
</template>
<style scoped>
.el-row {
    height: 100;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
    margin-bottom: 2px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>