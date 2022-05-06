import moment from 'moment'

const getTimeDifference = (parkTime: string) => {
	const dateParked = moment(parkTime)
	const dateNow = moment()

	const timeBetween = moment.duration(dateNow.diff(dateParked))

	const timeDifferenceinHours = Math.ceil(timeBetween.asHours())

	return timeDifferenceinHours
}

export default getTimeDifference
