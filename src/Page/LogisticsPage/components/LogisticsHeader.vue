<template>
    <p>这里是网页头部，网页头部内容写在这里，当然除了基本的还可以再加组件，或者舍弃组件化都写在index里</p>
    <p>{{ a }}</p>
</template>
<script lang="ts" setup>
const a=ref(0)
</script>