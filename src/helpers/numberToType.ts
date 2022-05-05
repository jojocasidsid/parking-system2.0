const numbertToType = (type: 0 | 1 | 2 | 3): string => {
	switch (type) {
		case 1:
			return 'Small'
		case 2:
			return 'Medium'
		case 3:
			return 'Large'
		default:
			return 'Unknown'
	}
}

export default numbertToType
