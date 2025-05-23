import moment from 'moment'

export function useTemplateUtils() {
    const highlightVariables = (text: string): string => {
        return text.replace(/{{\s*(\w+)\s*}}/g, (_match, variableName) => {
            return `<mark class='px-1 bg-slate-100 text-green-700 font-semibold'>${variableName}</mark>`
        })
    }

    const formatDate = (date: string): string => {
        return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY')
    }

    return {
        highlightVariables,
        formatDate,
    }
}
