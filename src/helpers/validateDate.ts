import moment from 'moment'

const validateDate = (value: string | undefined) => {
	if (value) {
		const dateParked = moment(value)
		const dateNow = moment()
		const timeBetween = moment.duration(dateNow.diff(dateParked))

		if (Number(timeBetween) >= 0) {
			return true
		}
		return false
	}
	return false
}

export default validateDate
