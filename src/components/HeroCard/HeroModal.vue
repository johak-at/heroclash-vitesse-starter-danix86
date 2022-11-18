<script setup>
const emits = defineEmits(["hideBiography"])
const props = defineProps(["biography", "connections", "appearance", "work"])
</script>

<template>
<div class = "modal" @click="emits('hideBiography')">
    <ul >
        <li v-for="(stuff, key) in biography" :key="key">{{key}}: {{stuff}}</li>
        <br />
        <li v-for="(stuff, key) in appearance" :key="key">{{key}}: {{stuff}}</li>
        <br />
        <li v-for="(stuff, key) in connections" :key="key">{{key}}: {{stuff}}</li>
        <br />
        <li v-for="(stuff, key) in work" :key="key">{{key}}: {{stuff}}</li>
    </ul>
</div>
</template>

<style scoped>
.modal {
    text-align: left;
    padding: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: blue;
    }
</style>