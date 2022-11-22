import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCardsStore = defineStore('cards', ()=>{
    const heroCards = ref([])
    async function loadCards(){
        let response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=999&page=1')
    let data = await response.json()
    heroCards.value.push(...data.items)
    response = await fetch('https://hcpb.seiwald.club/api/collections/heroes/records?perPage=999&page=2')
    data = await response.json()
    heroCards.value.push(...data.items)
    }
    return {heroCards, loadCards}
})