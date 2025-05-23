<script setup lang="ts">
import { ref } from 'vue'

// Defined preset of color styles
type BubbleColor = 'blue' | 'green' | 'white'
type BubbleColorMap = {
    [color in BubbleColor]: string
}

const triangleSize = ref(16)
const bubbleColor = ref<BubbleColor>('white')

const backgroundColors = ref<BubbleColorMap>({
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    white: 'bg-white'
})

const borderColors = ref<BubbleColorMap>({
    blue: 'after:border-t-blue-600',
    green: 'after:border-t-green-600',
    white: 'after:border-t-white'
})
</script>

<template>
    <div :style="{ '--triangle-size': triangleSize + 'px' }">
        <div
            :class="`relative ${backgroundColors[bubbleColor] ?? backgroundColors['white']} px-5 py-2 rounded-tr-lg rounded-b-lg ml-[var(--triangle-size)]`">
            <div
                :class="`absolute top-0 left-0 after:absolute after:-left-[var(--triangle-size)] after:top-0 after:h-0 after:w-0 after:content-[''] after:border-transparent ${borderColors[bubbleColor] ?? borderColors['white']} after:border-r-0 after:border-(length:--triangle-size) after:border-solid`">
            </div>
            <slot name="content"></slot>
        </div>
    </div>
</template>