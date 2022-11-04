<script setup>
    const props = defineProps(['skill', 'value'])
</script>

<template>
    <div flex justify-between>
        <span>{{skill}}</span>
        <span>{{value}}</span>
    </div>
</template>