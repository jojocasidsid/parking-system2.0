const numbertToType = (type: 0 | 1 | 2 | 3): string => {
	switch (type) {
		case 1:
			return 'SP'
		case 2:
			return 'MP'
		case 3:
			return 'LP'
		default:
			return 'Unknown'
	}
}

export default numbertToType
