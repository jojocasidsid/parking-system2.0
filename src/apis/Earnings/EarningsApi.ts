import api from 'config/api'
import moment from 'moment'
import { ISlotData } from './interface'

const EarningsApi = {
	list: () => api.get('/earnings'),
	add: (data: ISlotData) => api.post(`/earnings`, data),
	getVehicleTransactionsWithin1Hour: (vehicle: string) =>
		api.get('/earnings', {
			params: {
				transactionDate_gte: moment().subtract(1, 'hours'),
				vehicle,
				_sort: 'parkTime',
				_order: 'asc',
			},
		}),
}

export default EarningsApi
