<script setup>
import {ref} from 'vue'
const emits = defineEmits(['changeHero'])
let heroNumber = ref(1)
</script>

<template>
    <label for="heroNumber">Choose Hero</label>
<input v-model="heroNumber" @input="emits('changeHero', heroNumber)" type="number" name="heroNumber" id="heroNumber" min="1">
</template>