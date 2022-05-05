const numbertToType = (type: 1 | 2 | 3): string => {
	switch (type) {
		case 1:
			return 'Small'
		case 2:
			return 'Medium'
		case 3:
			return 'Large'
		default:
			return 'Small'
	}
}

export default numbertToType
