import moment from 'moment'
import getTimeDifference from './getTimeDifference'

describe('getTimeDifference', () => {
	it('should get a 1 hour difference', () => {
		const time = moment().subtract(45, 'minutes').format()
		const timeDiff = getTimeDifference(time)
		expect(timeDiff).toBe(1)
	})

	it('should get a 2 hours difference', () => {
		const time = moment().subtract(70, 'minutes').format()
		const timeDiff = getTimeDifference(time)
		expect(timeDiff).toBe(2)
	})
})
