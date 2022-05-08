import numberToType from './numberToType'

describe('number to Type', () => {
	it('should get SP as type', () => {
		const type = numberToType(1)

		expect(type).toBe('SP')
	})

	it('should get MP as type', () => {
		const type = numberToType(2)

		expect(type).toBe('MP')
	})

	it('should get LP as type', () => {
		const type = numberToType(3)

		expect(type).toBe('LP')
	})

	it('should get UNKNOWN as type', () => {
		const type = numberToType(0)

		expect(type).toBe('UNKNOWN')
	})
})
