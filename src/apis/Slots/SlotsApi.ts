import api from 'config/api'
import moment from 'moment'

const SlotsAPI = {
	list: () => api.get('/slots'),

	getNearest: (vehicleType: number, entrance: string) =>
		api.get('/slots', {
			params: {
				parkedType: 0,
				type_gte: vehicleType,
				_sort: entrance.toLowerCase(),
				_order: 'asc',
				_limit: '1',
			},
		}),
	searchVehicle: (vehicle: string) =>
		api.get('/slots', {
			params: {
				vehicle,
			},
		}),
	getSlot: (id: number) => api.get(`/slots/${id}`),
	parkSlot: (
		id: number,
		parkedType: number,
		vehicle: string,
		parkNow: boolean,
		parkTime: string
	) => {
		const requestData = {
			vehicle,
			parkedType,
			parkTime: parkNow ? moment() : moment(parkTime).format(),
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
}

export default SlotsAPI
