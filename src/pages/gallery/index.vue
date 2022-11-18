<script setup>
const heroCards = ref([]);
const hero = ref('');
onMounted(async ()=>{
  let response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=999&page=1')
  let data = await response.json()
  heroCards.value.push(...data.items)
  response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=999&page=2')
  data = await response.json()
  heroCards.value.push(...data.items)
  hero.value = heroCards.value[0].data
})
</script>

<template>
    <HeroCard v-if="hero" :hero="hero" />
</template>