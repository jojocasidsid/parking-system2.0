import moment from 'moment'
import getSumByKey from './getSumByKey'

describe('getSumByKey', () => {
	it('should get the correct sum for the hours', () => {
		const transactions = [
			{
				price: 40,
				hours: 0.12,
				parkTime: moment().subtract(55, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(50, 'minutes').format(),
				vehicle: '123-321',
				id: 3,
			},

			{
				price: 0,
				hours: 0.12,
				parkTime: moment().subtract(45, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(40, 'minutes').format(),
				vehicle: '123-321',
				id: 4,
			},

			{
				price: 0,
				hours: 0.12,
				parkTime: moment().subtract(35, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(30, 'minutes').format(),
				vehicle: '123-321',
				id: 5,
			},
		]

		const output = getSumByKey(transactions, 'hours')

		expect(output).toBe(0.36)
	})

	it('should get the correct sum for the price', () => {
		const transactions = [
			{
				price: 40,
				hours: 0.12,
				parkTime: moment().subtract(55, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(50, 'minutes').format(),
				vehicle: '123-321',
				id: 3,
			},

			{
				price: 0,
				hours: 0.12,
				parkTime: moment().subtract(45, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(40, 'minutes').format(),
				vehicle: '123-321',
				id: 4,
			},

			{
				price: 0,
				hours: 0.12,
				parkTime: moment().subtract(35, 'minutes').format(),
				parkingType: 2,
				transactionDate: moment().subtract(30, 'minutes').format(),
				vehicle: '123-321',
				id: 5,
			},
		]

		const output = getSumByKey(transactions, 'price')

		expect(output).toBe(40)
	})
})
