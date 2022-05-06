import { computeTransaction } from 'helpers'

describe('computeTransaction', () => {
	it('should have a fee of flat rate for large vehicle', () => {
		const fee = computeTransaction(3, 3)
		expect(fee).toBe(40)
	})

	it('should have a fee of flat rate for medium vehicle', () => {
		const fee = computeTransaction(3, 2)
		expect(fee).toBe(40)
	})

	it('should have a fee of flat rate for small vehicle', () => {
		const fee = computeTransaction(3, 1)
		expect(fee).toBe(40)
	})

	it('should have a fee of 5000 for large type vehicle', () => {
		const fee = computeTransaction(24, 3)
		expect(fee).toBe(5000)
	})

	it('should have a fee of 5000 for medium type vehicle', () => {
		const fee = computeTransaction(24, 2)
		expect(fee).toBe(5000)
	})

	it('should have a fee of 5000 for small type vehicle', () => {
		const fee = computeTransaction(24, 3)
		expect(fee).toBe(5000)
	})

	it('should have a fee of 5100/25hours for large type vehicle', () => {
		const fee = computeTransaction(25, 3)
		expect(fee).toBe(5100)
	})

	it('should have a fee of 5060/25hours for large type vehicle', () => {
		const fee = computeTransaction(25, 2)
		expect(fee).toBe(5060)
	})

	it('should have a fee of 5020/25hours for large type vehicle', () => {
		const fee = computeTransaction(25, 1)
		expect(fee).toBe(5020)
	})
})
