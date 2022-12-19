<template>
    <p>这是主页面</p>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { LoginState } from '../../stores/index'
const loginstate=LoginState()
onMounted(()=>{
    console.log(loginstate.LoginJwt);
    
})
</script>