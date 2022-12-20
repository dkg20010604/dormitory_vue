<template>
    <div class="centerpage" v-loading="loading">
        <div class="opa">
            <el-card class="bos-card" shadow="hover">
                <h3>欢迎来到后台管理系统</h3>
                <el-form class="Loginstatus" ref="LoginRules" :model="LoginInfo" :rules="rules">
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
                        <el-button @click="LoginClick()" type="primary" style="margin: auto;">登录</el-button>
                        <el-button style="margin: auto;" @click="reset(LoginRules)">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { LoginState } from '../../stores/index'
import { ElButton, ElCard, ElCheckbox, ElForm, ElFormItem, ElInput, ElMessage, ElMessageBox, type Action, type FormInstance } from 'element-plus'
import router from '@/router'
import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const login = LoginState()
const loading = ref(false)
const LoginInfo = reactive({
    username: '',
    password: '',
    reme: false,
    auto: false
})
const LoginRules = ref<FormInstance>();
const rules = reactive({
    username: [{ required: true, message: '你还没有输入账号', trigger: 'blur' },],
    password: [{ required: true, message: '你还没有输入密码', trigger: 'blur' },],
})
const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    LoginInfo.reme = false
    LoginInfo.auto = false
}
const LoginClick = async () => {
    const a = LoginInfo.username.length % 3;
    const pagename=ref('')
    if(a==0){
        pagename.value='TeacherPage'
    }
    else if(a==1){
        pagename.value='StudentPage'
    }
    else if(a==2){
        pagename.value='LogisticsPage'
    }
    router.push({
        name:pagename.value,
        params:{
            id:LoginInfo.username
        }
    })


    //登录流程，有用
    // LoginRules.value?.validate((validate: boolean) => {
    //     if (validate) {
    //         loading.value = true
    //         Login(LoginInfo.username, LoginInfo.password)
    //     }
    //     else {
    //         ElMessageBox.alert('This is a message', 'Title', {
    //             // if you want to disable its autofocus
    //             // autofocus: false,
    //             confirmButtonText: 'OK',
    //             callback: (action: Action) => {
    //                 ElMessage({
    //                     type: 'info',
    //                     message: `action: ${action}`,
    //                 })
    //             },
    //         })
    //     }
    // })
}
async function Login(userid: string, password: string) {
    await fetch('https://localhost:5001/api/Login', {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userid,
            password: password
        })
    }).then(res => res.json())
        .then(data => {
            if (data.code == 200) {
                //存储jwt认证码
                localStorage.setItem('LJ', data.data)
                //存储全局变量,页面刷新后失效
                login.LoginSucceeded(LoginInfo.username, data.data, LoginInfo.auto, LoginInfo.reme)
                //勾选记住密码后在本地缓存存储信息
                if (LoginInfo.reme) {
                    localStorage.setItem('LU', LoginInfo.username)
                    localStorage.setItem('LP', LoginInfo.password)
                    localStorage.setItem('LA', LoginInfo.auto as unknown as string)
                    localStorage.setItem('LR', LoginInfo.reme as unknown as string)
                }
                //否则清空信息
                else {
                    localStorage.removeItem('LU')
                    localStorage.removeItem('LP')
                    localStorage.removeItem('LA')
                    localStorage.removeItem('LR')
                }
                //跳转页面
                router.push({
                    name: "mainpage"
                })
            }
            else {
                ElMessage({
                    message: '账号或密码错误.',
                    type: 'warning',
                })
            }
        });
}
onMounted(() => {
    //如果缓存区表明记住过密码，将缓存数据取出
    // if (localStorage.getItem('LR') == 'ture') {
    //     LoginInfo.username = localStorage.getItem('LU') as string
    //     LoginInfo.password = localStorage.getItem('LP') as string
    //     LoginInfo.reme = true
    //     //在记住密码的前提下，判断是否勾选过自定登录，尝试自动登录
    //     if (localStorage.getItem('LA') == 'ture') {
    //         Login(LoginInfo.username, LoginInfo.password);
    //     }
    // }
})
watch(
    () => LoginInfo.reme,
    () => {
        if (!LoginInfo.reme) {
            LoginInfo.auto = false
        }
    }
)
watch(
    () => LoginInfo.auto,
    () => {
        if (LoginInfo.auto) {
            LoginInfo.reme = true;
        }
    }
)


</script>
<style scoped>
.centerpage {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bos-card {
    height: auto;
}

.opa div {
    background-color: rgba(255, 255, 255, 0.8)
}

.loginitem {
    margin: 20px;
}

.Loginstatus div {
    opacity: 1;
    font-style: normal;
}

h3 {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>