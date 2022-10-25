<script setup>
const props = defineProps(['hero']);
</script>

<template>
        <HeroImage :imageUrl="hero.images.md"/>
        <HeroStats />
</template>

<style scoped>
.card {
    width: 330px;
    height: 230px;
}
</style>