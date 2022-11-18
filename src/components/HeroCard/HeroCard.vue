<script setup>
    const props = defineProps(['hero']);
    const showBiography = ref(false);
</script>

<template>
    <div grid class="heroCard">
        <HeroImage :imageUrl="hero.images.md"  @show-biography="showBiography = true"/>
        <HeroStats :name="hero.name" :stats="hero.powerstats" :alignment="hero.biography.alignment"/>
        <HeroModal v-if="showBiography" @hide-biography="showBiography = false" :biography="hero.biography" :connections="hero.connections" :appearance="hero.appearance" :work="hero.work"></HeroModal>
    </div>
</template>

<style scoped>
.heroCard {
    left: 40%;
    position: relative;
    height: auto;
    width: 400px;
    grid-template-columns: 1fr 1.2fr;
    padding-top: 200px;
}
</style>