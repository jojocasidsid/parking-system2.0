const computeFee = (timeDifferenceinHours: number, fee: number) => {
	const flatRate = 40
	const flatHours = 3
	if (timeDifferenceinHours <= 3) {
		return flatRate
	}

	if (timeDifferenceinHours / 24 >= 1) {
		const diff = Math.floor(timeDifferenceinHours / 24)
		const chunk = diff * 5000
		const extraHours = timeDifferenceinHours - diff * 24
		const total = extraHours * fee + chunk

		return total
	}

	return (timeDifferenceinHours - flatHours) * fee + flatRate
}

const computeTransaction = (
	timeDifferenceinHours: number,
	parkType: number
) => {
	switch (parkType) {
		case 1:
			return computeFee(timeDifferenceinHours, 20)
		case 2:
			return computeFee(timeDifferenceinHours, 60)
		case 3:
			return computeFee(timeDifferenceinHours, 100)
		default:
			return computeFee(timeDifferenceinHours, 100)
	}
}

export default computeTransaction
