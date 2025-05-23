import type { TemplatePage, TemplateStatus } from '@/types/template'
import { api } from './axios'

export async function fetchTemplates(page: number = 1, status: TemplateStatus = 'all', perPage: number = 12): Promise<TemplatePage> {
    const params: Record<string, any> = { 
        page, 
        rows_per_page: perPage, 
        ...(status !== 'all' && { status })
    }
    const response = await api.get<TemplatePage>('/templates', { params })
    return response.data
}