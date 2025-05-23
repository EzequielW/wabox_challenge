<script setup lang="ts">
import type { TemplateStatus } from '@/types/template'
import { ref, watch } from 'vue'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const options: TemplateStatus[] = ['all', 'draft', 'PENDING', 'REJECTED']
const selected = ref(props.modelValue)

watch(
    () => props.modelValue,
    (newVal) => {
        selected.value = newVal
    }
)

function selectStatus(status: string) {
    selected.value = status
    emit('update:modelValue', status)
}
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <button v-for="option in options" :key="option" @click="selectStatus(option)" :class="[
            'px-4 py-1 border rounded-full text-sm capitalize',
            selected === option
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        ]">
            {{ option.toLowerCase() }}
        </button>
    </div>
</template>
