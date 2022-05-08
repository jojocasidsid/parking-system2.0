import getTimeDifference from 'helpers/getTimeDifference/getTimeDifference'
import moment from 'moment'
import continousRateCalculation from './continousRateCalculation'

describe('continousRateCalculation', () => {
	it('should have a fee of 0 within 1 hour of coming back', () => {
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

		const currentTimeDiff = getTimeDifference(
			moment().subtract(25, 'minutes').format(),
			moment().subtract(20, 'minutes').format()
		)

		const output = continousRateCalculation(
			transactions,
			currentTimeDiff,
			2,
			moment().subtract(20, 'minutes').format()
		)

		expect(output).toBe(0)
	})
})
