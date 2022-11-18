<script setup>
const emits = defineEmits(["hideBiography"])
const props = defineProps(["biography", "connections", "appearance", "work"])
</script>

<template>
<div class = "modal" @click="emits('hideBiography')">
    <ul v-for="(stuff, key) in biography" :key="key">
        <li>{{key}}: {{stuff}}</li>
    </ul>
    <br />
    <ul v-for="(stuff, key) in appearance" :key="key">
        <li>{{key}}: {{stuff}}</li>
    </ul>
    <br />
    <ul v-for="(stuff, key) in connections" :key="key">
        <li>{{key}}: {{stuff}}</li>
    </ul>
    <br />
    <ul v-for="(stuff, key) in work" :key="key">
        <li>{{key}}: {{stuff}}</li>
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
    background-color: grey;
    opacity: 0.8;
    }
</style>