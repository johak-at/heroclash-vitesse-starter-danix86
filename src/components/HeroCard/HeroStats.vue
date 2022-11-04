<script setup>
    const props = defineProps(['name', 'stats', 'alignment'])
</script>

<template>
    <div :class="alignment">
    <h1>{{name}}</h1>
    <StatField v-for="(value, key) in stats" :key="key" :skill="key" :value="value">{{key}}: {{value}}</StatField>
    </div>
</template>

<style scoped>
.bad {
    background-color: red;
}
.good {
    background-color: green;
}
.neutral {
    background-color: yellow;
}
</style>