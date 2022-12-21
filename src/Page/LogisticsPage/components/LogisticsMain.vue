<template>
    <p>主要内容</p>
</template>
<script setup lang="ts">

import router from "@/router";
import Notify from "@wcjiang/notify";
const notify = new Notify({
    message: "There is message.", // page title.
    effect: "flash", // flash | scroll, Flashing or scrolling
    openurl: "https://github.com/jaywcjlove/iNotify", // Click on the pop-up window to open the connection address
    onclick: () => {
        notify.close();
        console.log("---");
    },
})
onMounted(() => {
    // if(localStorage.getItem('LA') != 'ture'){
    //     router.replace('/')
    //     return;
    // }
    notify.player()
})
</script>