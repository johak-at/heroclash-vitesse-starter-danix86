<script setup>
    const props = defineProps(['hero']);
</script>

<template>
    <div grid class="heroCard">
        <HeroImage :imageUrl="hero.images.md"/>
        <HeroStats :name="hero.name" :stats="hero.powerstats" :alignment="hero.biography.alignment"/>
    </div>
</template>

<style scoped>
.heroCard {
    grid-template-columns: 1fr 1.2fr;
}
</style>