<script setup>
const emits = defineEmits(["hideBiography"])
</script>

<template>
<div class = "modal" @click="emits('hideBiography')">
    <ul>
        <li></li>
    </ul>
</div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: pink;
    }
</style>