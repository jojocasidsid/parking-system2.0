import { ITransactionListColums } from './types'

export const COLUMNS: ITransactionListColums[] = [
	{
		id: 'id',
		label: 'ID',
		sortable: true,
	},
	{
		id: 'vehicle',
		label: 'Plate Number',
		sortable: false,
	},
	{
		id: 'parkingType',
		label: 'Parking Type',
		sortable: true,
	},

	{
		id: 'hours',
		label: 'Hours Spent',
		sortable: true,
	},

	{
		id: 'price',
		label: 'Price',
		sortable: false,
	},
	{
		id: 'parkTime',
		label: 'Parking Time',
		sortable: true,
		type: 'dateTime',
	},

	{
		id: 'unparkTime',
		label: 'Leave Time',
		sortable: true,
		type: 'dateTime',
	},
	{
		id: 'transactionDate',
		label: 'Transaction Date',
		sortable: true,
	},
]
