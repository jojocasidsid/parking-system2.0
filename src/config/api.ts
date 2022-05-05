import axios, { AxiosResponse, AxiosError } from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL

const REQUEST_TIMEOUT = 30000

const api = axios.create({
	baseURL,
	timeout: REQUEST_TIMEOUT,
})

api.interceptors.request.use((config) => {
	config.headers = {
		Accept: 'application/json',
	}

	return config
})

api.interceptors.response.use(
	(response: AxiosResponse) => response.data.data,
	(error: AxiosError) => {
		const errorDetails = {
			status: error.response?.data.errors.status,
			message: error.response?.data.errors.title,
			error: {
				data: error.response?.data.errors,
				message: error.response?.data.message,
				status: error.response?.status,
			},
		}

		return Promise.reject(errorDetails)
	}
)

export default api
