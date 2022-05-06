import moment from 'moment'

const getTimeDifference = (
	parkTime: string,
	leaveTime: string | undefined = ''
) => {
	const dateParked = moment(parkTime)
	const dateNow = leaveTime ? moment(leaveTime) : moment()

	const timeBetween = moment.duration(dateNow.diff(dateParked))

	return timeBetween.asHours()
}

export default getTimeDifference
