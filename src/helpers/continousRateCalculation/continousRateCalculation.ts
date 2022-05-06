import { getSumBykey, computeTransaction } from 'helpers'
import getTimeDifference from 'helpers/getTimeDifference/getTimeDifference'
import moment from 'moment'

interface IArr {
	[key: string]: string | null | number
}

const continousRateCalculation = (
	transactions: IArr[],
	currentTimeDiff: number,
	type: number,
	leaveTime: string | undefined = ''
) => {
	const pastHours = getSumBykey(transactions, 'hours')

	const firstTransactionTime =
		String(transactions[0].parkTime) || moment().format()

	const diffHours = getTimeDifference(firstTransactionTime, leaveTime)
	const totalHours = Math.ceil(diffHours)

	const pastTotalFees = computeTransaction(pastHours, type)
	const totalFeesForAllTransactions = computeTransaction(totalHours, type)

	const totalFees = totalFeesForAllTransactions - pastTotalFees

	return totalFees
}

export default continousRateCalculation
