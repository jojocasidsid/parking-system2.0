import moment from 'moment'
import isEarlierDate from './isEarlierDate'

describe('isEarlierDate', () => {
	it('should return true', () => {
		const output = isEarlierDate(moment().subtract(1, 'hours').format())

		expect(output).toBe(true)
	})

	it('should return false', () => {
		const output = isEarlierDate(moment().add(1, 'hours').format())

		expect(output).toBe(false)
	})
})
