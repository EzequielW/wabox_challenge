<script setup lang="ts">
import type { TemplateButton, TemplateButtonType } from '@/types/template'
import { computed, ref } from 'vue'

const props = defineProps<{ buttons: TemplateButton[] }>()

const showExtraButtons = ref(false)

// To show only 3 buttons or less
const buttonsFiltered = computed(() => {
    if(props.buttons.length > 3 && !showExtraButtons.value) {
        return [
            props.buttons[0],
            props.buttons[1],
            {
                id: props.buttons[2].id,
                type: 'NONE' as TemplateButtonType,
                text: 'Explorar mas',
                url: '',
                index: 0
            }
        ]
    }

    return props.buttons
})

const iconClass = (buttonType: TemplateButtonType) => {
    switch (buttonType) {
        case 'QUICK_REPLY': return 'reply'
        case 'STATIC_URL': return 'arrow-up-right-from-square'
        case 'PHONE_NUMBER': return 'phone'
        default:
            return ''
    }
}

const handleShowMore = (text: string) => {
    if(text === 'Explorar mas') {
        showExtraButtons.value = true
    }
}
</script>

<template>
    <div class="flex flex-col">
        <button @click="handleShowMore(button.text)" v-for="button in buttonsFiltered" :key="button.id"
            class="py-3 text-sm font-medium text-blue-500 hover:bg-gray-200 cursor-pointer border-t-1 border-slate-100">
            <font-awesome-icon v-if="button.type !== 'NONE'" class="mr-2" :icon="iconClass(button.type)" />
            {{ button.text }}
        </button>
    </div>
</template>