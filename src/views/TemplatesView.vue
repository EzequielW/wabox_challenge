<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useTemplatesStore } from '@/stores/templateStore'
import TemplateCard from '@/components/TemplateCard.vue'
import StatusFilter from '@/components/StatusFilter.vue'

const templatesStore = useTemplatesStore()

const statusFilter = ref(templatesStore.statusFilter)
const sentinel = ref<HTMLElement | null>(null)

watch(statusFilter, (newStatus) => {
  templatesStore.setStatusFilter(newStatus)
})

onMounted(() => {
    templatesStore.fetchTemplatesPage()

    // To detect scroll
    const observer = new IntersectionObserver(
        async ([entry]) => {
            if (entry.isIntersecting) {
                await templatesStore.loadNextPage()
            }
        },
        {
            rootMargin: '200px',
        }
    )

    if (sentinel.value) observer.observe(sentinel.value)
})
</script>

<template>
    <div class="space-y-4 py-5 px-5">
        <StatusFilter
            v-model="statusFilter"
            class="mb-4"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="h-[340px] flex flex-col justify-between items-center rounded-md bg-slate-100 w-full sm:max-w-md">
                <div class="flex justify-center py-5 border-b-2 border-slate-200 w-full">
                    <div class="font-semibold text-lg">
                        Create new template
                    </div>
                </div>

                <button class="w-11 h-11 rounded-full bg-blue-500 hover:bg-blue-700 cursor-pointer">
                    <font-awesome-icon icon="plus" class="fa-lg text-white" />
                </button>

                <a class="mb-3 text-sm text-slate-500 font-semibold cursor-pointer underline">Create new from our library <font-awesome-icon icon="arrow-right" class="fa-sm ml-1 underline" /></a>
            </div>
            <TemplateCard class="h-[340px] sm:max-w-md" v-for="template in templatesStore.templatePage.data" :key="template.id" :template="template" />
        </div>

        <div
            ref="sentinel"
            class="h-8"
        />

        <div v-if="templatesStore.loading" class="text-center mt-4">Loading...</div>
        <div v-else-if="templatesStore.error" class="text-red-600 text-center py-8">{{ templatesStore.error }}</div>
    </div>
</template>
