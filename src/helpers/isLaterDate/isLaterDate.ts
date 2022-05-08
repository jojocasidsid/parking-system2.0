import moment from 'moment'

const isLaterDate = (value: string | undefined) => {
	if (value) {
		const dateParked = moment(value)
		const dateNow = moment()
		const timeBetween = moment.duration(dateNow.diff(dateParked))

		if (Number(timeBetween) >= 0) {
			return false
		}
	}
	return true
}

export default isLaterDate
