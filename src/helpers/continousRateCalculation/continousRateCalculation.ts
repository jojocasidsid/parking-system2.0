import { getSumBykey, computeTransaction } from 'helpers'

interface IArr {
	[key: string]: string | null | number
}

const continousRateCalculation = (
	transactions: IArr[],
	currentTimeDiff: number,
	type: number
) => {
	const pastHours = getSumBykey(transactions, 'hours')
	const totalHours = pastHours + currentTimeDiff

	const pastTotalFees = computeTransaction(pastHours, type)
	const totalFeesForAllTransactions = computeTransaction(totalHours, type)

	const totalFees = totalFeesForAllTransactions - pastTotalFees

	return totalFees
}

export default continousRateCalculation
