<script setup lang="ts">
defineProps<{
    iconName?: string,
    text: string,
    backgroundColor?: string,
    color?: string
}>()

</script>

<template>
    <div :class="`flex items-center gap-1 py-0.5 px-1 rounded-md ${backgroundColor ?? 'bg-green-200'} max-w-fit`">
        <font-awesome-icon v-if="iconName" :icon="iconName" :class="`fa-sm ${color ?? 'text-green-600'}`" />
        <div :class="`text-sm ${color ?? 'text-green-600'} font-semibold capitalize`">{{ text }}</div>
    </div>
</template>