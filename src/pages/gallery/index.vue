<script setup>
import {useCardsStore} from '~/store/cards'

const cardsStore = useCardsStore();
const hero = ref(null);
function switchHero(newNumber) {
  if(Number.isInteger(newNumber) && newNumber > 0 && newNumber < heroCards.value.length) {
    hero.value = cardsStore.heroCards[newNumber - 1].data;
}
}
onMounted(async ()=>{
  await cardsStore.loadCards()
  hero.value = cardsStore.heroCards[0].data;
})

</script>

<template>
    <HeroCard v-if="hero" :hero="hero" />
    <HeroSelector @changeHero="switchHero"/>
</template>