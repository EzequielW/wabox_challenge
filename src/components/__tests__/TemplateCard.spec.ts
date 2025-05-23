import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import TemplateCard from '@/components/TemplateCard.vue'
import type { Template } from '@/types/template'

describe('TemplateCard.vue', () => {
    let wrapper: VueWrapper<any>
    const templateMock: Template = {
        id: 16,
        name: 'mock title',
        language: 'en',
        category: 'MARKETING',
        status: 'draft',
        components: {
            header: {
                type: 'TEXT',
                content: 'This is a text'
            },
            body: {
                content: 'Your product has arrived!'
            },
            footer: '',
            buttons: [
                {
                    id: 46,
                    type: 'QUICK_REPLY',
                    text: 'Make a quick reply',
                    url: 'Make a quick reply',
                    index: 0
                },
                {
                    id: 47,
                    type: 'PHONE_NUMBER',
                    text: 'Call us',
                    url: 'Call us',
                    phone_number: '1123487090',
                    index: 0
                },
                {
                    id: 48,
                    type: 'STATIC_URL',
                    text: 'Button 3',
                    url: 'Button 3',
                    index: 0
                },
                {
                    id: 49,
                    type: 'STATIC_URL',
                    text: 'Button 4',
                    url: 'Button 4',
                    index: 0
                }
            ]
        }
    }

    beforeEach(() => {
        wrapper = mount(TemplateCard, {
            props: {
                template: templateMock,
            },
        })
    })

    it('renders template name, category and language', () => {
        expect(wrapper.text()).toContain(templateMock.name)
        expect(wrapper.text()).toContain(templateMock.category)
        expect(wrapper.text()).toContain(templateMock.language)
        expect(wrapper.text().toLowerCase()).toContain(templateMock.status.toLowerCase())
    })

    it('renders only 2 buttons if buttons list is > 3 elements', () => {
        expect(wrapper.text()).toContain(templateMock.components.buttons[0].text)
        expect(wrapper.text()).toContain(templateMock.components.buttons[1].text)
        expect(wrapper.text()).not.toContain(templateMock.components.buttons[2].text)
        expect(wrapper.text()).not.toContain(templateMock.components.buttons[3].text)
    })
})
