<template>
    <div class="centerpage" v-loading="loading" style="float: left;display: flex;flex:auto;">
        <div class="opa" style="float: left;">
            <el-card class="bos-card" shadow="hover">
                <h3>欢迎来到后台管理系统</h3>
                <el-form class="Loginstatus" ref="LoginRules" :model="LoginInfo" :rules="rule">
                    <el-form-item label="输入账号：" prop="username" class="loginitem">
                        <el-input v-model="LoginInfo.username" />
                    </el-form-item>
                    <el-form-item label="输入密码：" prop="password" class="loginitem">
                        <el-input type="password" v-model="LoginInfo.password"></el-input>
                    </el-form-item>
                    <div class="Loginstatus">
                        <el-checkbox v-model="LoginInfo.reme" label="记住密码" size="large"></el-checkbox>
                        <el-checkbox v-model="LoginInfo.auto" label="下次自动登录" size="large"></el-checkbox>
                    </div>
                    <el-form-item class="Loginstatus">
                        <el-button @click="LoginClick" type="primary" style="margin: auto;">登录</el-button>
                        <el-button style="margin: auto;">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
    <div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const loading = false
const LoginInfo = reactive({
    username: '',
    password: '',
    reme: false,
    auto: false
})
const LoginClick = () => {
    fetch('https://localhost:5001/api/Login', {
        method:'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username:LoginInfo.username,
            password:LoginInfo.password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.code==200){
            
        }
        
    })
}
const rule = ''
</script>
<style scoped>
h3 {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>