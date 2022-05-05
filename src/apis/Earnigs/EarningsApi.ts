import api from 'config/api'
import { IData } from './interface'

const EarningsApi = {
	list: () => api.get('/earnings'),
	add: (data: IData) => api.post(`/earnings`, data),
	getEarningsWithin1Hour: (vehicle: string, time: string) =>
		api.get('/earnings', {
			params: {
				transactionDate_gte: time,
				vehicle,
			},
		}),
}

export default EarningsApi
