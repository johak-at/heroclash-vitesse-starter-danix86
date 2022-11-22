<script setup>

const heroCards = ref([]);
const hero = ref(null);
function switchHero(newNumber) {
  if(Number.isInteger(newNumber) && newNumber > 0 && newNumber < heroCards.value.length) {
    hero.value = heroCards.value[newNumber - 1].data;
}
}
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
    <HeroSelector @changeHero="switchHero"/>
</template>