<script setup lang="ts">
import WhatsappButtonGroup from './common/WhatsappButtonGroup.vue'
import ChatBubble from './common/ChatBubble.vue'
import Badge from './common/Badge.vue'
import type { Template, TemplateStatusStyle } from '@/types/template'
import { computed } from 'vue'
import { useTemplateUtils } from '@/composables/useTemplateUtils'

const props = defineProps<{ template: Template }>()

const { highlightVariables, formatDate } = useTemplateUtils()

// Api is not returning a date currently, so I added a sample date
const templateDate = '2024-05-21'

const badgeStatusStyle: TemplateStatusStyle = {
    all: {},
    draft: {
        iconName: 'clock',
        color: 'text-amber-600',
        backgroundColor: 'bg-amber-200'
    },
    PENDING: {
        iconName: 'signal',
        color: 'text-green-600',
        backgroundColor: 'bg-green-200'
    },
    REJECTED: {
        iconName: 'circle-xmark',
        color: 'text-red-600',
        backgroundColor: 'bg-red-200'
    }
}

const badgeStyle = computed(() => {
    return badgeStatusStyle[props.template.status]
})

</script>

<template>
    <div class="flex flex-col justify-between rounded-md border-2 border-slate-200 bg-slate-100 w-full">
        <!-- HEADER -->
        <div class="flex justify-between items-center p-2 bg-slate-200">
            <div class="flex flex-col">
                <h3 class="text-sm font-semibold mb-2">{{ template.name }}</h3>
                <div class="flex items-center gap-2">
                    <Badge 
                        :text="template.status.toLowerCase()"
                        :iconName="badgeStyle.iconName"
                        :color="badgeStyle.color"
                        :backgroundColor="badgeStyle.backgroundColor"
                    />
                    <div class="text-sm font-normal text-slate-500">
                        {{ template.category.toUpperCase() }}
                    </div>
                </div>
            </div>
            <div class="flex gap-1">
                <button class="bg-white px-2.5 py-0.5 border-1 border-slate-300 text-sm rounded-sm font-semibold text-slate-500 cursor-pointer">
                    <span>View</span>
                </button>
                <button class="bg-white px-2.5 py-0.5 border-1 border-slate-300 text-sm rounded-sm font-semibold text-slate-500 cursor-pointer">
                    <font-awesome-icon icon="ellipsis-vertical" />
                </button>
            </div>
        </div>

        <!-- MESSAGE TEMPLATE -->
        <div class="mb-2 px-3 py-5 overflow-auto scrollbar">
            <ChatBubble class="max-w-[80%]">
                <template #content>
                    <div class="flex flex-col justify-between gap-3">
                        <div v-if="template.components.header?.content" class="font-semibold text-sm">
                            {{ template.components.header.content }}
                        </div>
                        <div class="text-sm" v-html="highlightVariables(template.components.body.content)"></div>
                        <div v-if="template.components.footer" class="text-sm">{{ template.components.footer }}</div>
                        <WhatsappButtonGroup :buttons="template.components.buttons" />
                    </div>
                </template>
            </ChatBubble>
        </div>

        <!-- FOOTER -->
        <div class="flex justify-between items-center p-2 bg-slate-200">
            <div class="bg-slate-100 px-2 py-1 rounded-lg text-xs font-semibold text-slate-500 leading-none">
                {{ template.language }}
            </div>
            <div class="text-xs font-medium text-slate-500">
                {{ formatDate(templateDate) }}
            </div>
        </div>
    </div>
</template>
