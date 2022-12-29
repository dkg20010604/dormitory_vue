<script setup lang="ts">
//可能有用
import router from '@/router';
import { ElMessage } from 'element-plus';
onMounted(async () => {
    //如果缓存区表明要自动登录，则尝试登陆
    if (localStorage.getItem('LA') == 'ture') {
        await fetch('https://localhost:5001/api/Login', {
            method: 'POST',
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: localStorage.getItem('LU'),
                password: localStorage.getItem('LP')
            })
        })
            .then(res => res.json())
            .then(data => {
                //成功登录
                if (data.code == 200) {
                    //刷新并存储jwt认证码
                    localStorage.setItem('LJ', data.data)
                }
                //失败，重定向到登录页
                else {
                    ElMessage({
                        message: '账号或密码错误.',
                        type: 'warning',
                    })
                    router.replace({
                        name: 'Home'
                    })
                }
            })
    }
})
</script>