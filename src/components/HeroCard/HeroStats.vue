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
    background-image: linear-gradient(135deg, red 0%, yellow 100%);
}
.good {
    background-image: linear-gradient(135deg, green 0%, yellow 100%);
}
.neutral {
    background-image: linear-gradient(135deg, grey 0%, yellow 100%);
}
</style>