<script setup>
    const props = defineProps(['skill', 'value'])
</script>

<template>
    <div flex justify-between>
        <span>{{skill[0].toUpperCase()+skill.substring(1, skill.length)}}</span>
        <span>{{value}}</span>
    </div>
</template>