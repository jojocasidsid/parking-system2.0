import api from 'config/api'
import moment from 'moment'
import { IFilters } from 'hooks/useListingTable'
import { ISlotData } from './interface'

const EarningsApi = {
	list: (params?: IFilters) => api.get('/earnings', { params }),
	add: (data: ISlotData) => api.post(`/earnings`, data),
	getVehicleTransactionsWithin1Hour: (vehicle: string, parkTime: string) =>
		api.get('/earnings', {
			params: {
				unparkTime_gte: moment(parkTime).subtract(1, 'hours').format(),
				vehicle,
				_sort: 'parkTime',
				_order: 'asc',
			},
		}),
}

export default EarningsApi
