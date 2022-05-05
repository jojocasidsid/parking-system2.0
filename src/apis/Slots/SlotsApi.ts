import api from 'config/api'
import moment from 'moment'

const SlotsAPI = {
	list: () => api.get('/slots'),

	parkSlot: (id: number, type: string, vehicle: string) => {
		const requestData = {
			vehicle,
			parkedType: type,
			parkTime: moment(),
			unparkTime: null,
		}
		return api.patch(`/slots/${id}`, requestData)
	},

	leaveSlot: (id: number) => {
		const requestData = {
			vehicle: '',
			parkedType: 0,
			parkTime: null,
			unparkTime: null,
		}
		return api.patch(`/slots/${id}`, requestData)
	},

	setLeaveSlot: (id: number, unparkTime: string) => {
		const requestData = {
			unparkTime,
		}
		return api.patch(`/slots/${id}`, requestData)
	},

	getNearestParking: (vehicleType: number, exit: string) =>
		api.get('/slots', {
			params: {
				parkedType: 0,
				type_gte: vehicleType,
				_sort: exit,
				_order: 'asc',
				_limit: '1',
			},
		}),
}

export default SlotsAPI
