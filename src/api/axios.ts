import axios from 'axios'

if (!import.meta.env.VITE_API_BASE_URL || !import.meta.env.VITE_API_TENANT) {
	throw new Error('Missing VITE_API_BASE_URL or VITE_API_TENANT in environment config')
}

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		Accept: 'application/json',
		'X-tenant': import.meta.env.VITE_API_TENANT,
	},
})