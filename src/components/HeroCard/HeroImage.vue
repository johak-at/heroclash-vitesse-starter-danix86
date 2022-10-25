<script setup>
    const props = defineProps(['imageUrl']);
</script>

<template>
    <img :src="`https://raw.githubusercontent.com/akabab/superhero-api/master/.backup/${imageUrl}`" alt="Hero Image" />
</template>