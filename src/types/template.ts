import type { PaginationLinks, PaginationMeta } from "./pagination"

export type TemplateButtonType = 'QUICK_REPLY' | 'PHONE_NUMBER' | 'STATIC_URL' | 'NONE'

export interface TemplateButton {
	id: number
	type: TemplateButtonType
	text: string
	url: string
	phone_number?: string
	index: number
}

export interface TemplateComponent {
	header?: {
		type: string
		content: string
	}
	body: {
		content: string
	}
	footer?: string
	buttons: TemplateButton[]
}

export type TemplateStatus = 'all' | 'draft' | 'PENDING' | 'REJECTED'

export type TemplateStatusStyle = {
    [color in TemplateStatus]: {
        iconName?: string,
        color?: string,
        backgroundColor?: string
    }
}

export interface Template {
	id: number
	name: string
	language: string
	category: string
	status: TemplateStatus
	components: TemplateComponent
}

export interface TemplatePage {
	data: Template[],
	links: PaginationLinks,
	meta: PaginationMeta
}