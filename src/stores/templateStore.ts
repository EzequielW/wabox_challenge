import { defineStore } from 'pinia'
import type { TemplatePage, Template, TemplateStatus } from '@/types/template'
import type { PaginationLinks, PaginationMetaLink, PaginationMeta } from '@/types/pagination'
import { fetchTemplates } from '@/api/templates'

export const useTemplatesStore = defineStore('templates', {
    state: () => ({
        templatePage: {
            data: [] as Template[],
            links: {} as PaginationLinks,
            meta: {
                links: [] as PaginationMetaLink[]
            } as PaginationMeta,
        } as TemplatePage,
        loading: false,
        error: null as string | null,
        statusFilter: 'all' as TemplateStatus,
    }),
    actions: {
        async fetchTemplatesPage(page = 1, append = false) {
            this.loading = true
            this.error = null
            try {
                if (!append) {
                    this.templatePage.data = []
                }

                const response = await fetchTemplates(page, this.statusFilter)

                if (append) {
                    this.templatePage.data.push(...response.data)
                    this.templatePage.links = response.links
                    this.templatePage.meta = response.meta
                } else {
                    this.templatePage = response
                }
            } catch (error: any) {
                this.error = error.message || 'Failed to fetch templates'
            } finally {
                this.loading = false
            }
        },
        async loadNextPage() {
            if (
                this.templatePage.meta &&
                this.templatePage.meta.current_page < this.templatePage.meta.last_page &&
                !this.loading
            ) {
                await this.fetchTemplatesPage(this.templatePage.meta.current_page + 1, true)
            }
        },
        setStatusFilter(status: TemplateStatus) {
            this.statusFilter = status
            this.fetchTemplatesPage(1, false)
        },
    },
})
