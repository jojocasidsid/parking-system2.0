import moment from 'moment'
import isLaterDate from './isLaterDate'

describe('isLaterDate', () => {
	it('should return false', () => {
		const output = isLaterDate(moment().subtract(1, 'hours').format())

		expect(output).toBe(false)
	})

	it('should return true', () => {
		const output = isLaterDate(moment().add(1, 'hours').format())

		expect(output).toBe(true)
	})
})
