import api from 'config/api'
import moment from 'moment'

const SlotsAPI = {
	list: () => api.get('/slots'),

	parkSlot: (id: number, type: string, vehicle: string) => {
		const requestData = { parked: vehicle, parkedType: type, dateTime: moment() }
		return api.patch(`/slots/${id}`, requestData)
	},

	leaveSlot: (id: number) => {
		const requestData = {
			parked: 0,
			parkedType: '',
			parkTime: null,
			unparkTime: null,
		}
		return api.patch(`/slots/${id}`, requestData)
	},

	getNearestParking: (vehicleType: number, exit: string) =>
		api.get('/slots', {
			params: {
				parked: 0,
				type_gte: vehicleType,
				_sort: exit,
				_order: 'asc',
				_limit: '1',
			},
		}),
}

export default SlotsAPI
