export interface ITransactionProperties {
	id: number
	vehicle: string
	price: number
	transactionDate: string
	parkingType: number
	parkTime: string
	unparkTime: string
	hours: number
}

export interface IListTransactions<Entity> {
	_order: 'asc' | 'desc' | undefined
	_sort: keyof Entity | ''
	_page: number
	_limit: number
	q: string
}

export interface ITransactionListColums {
	id: keyof ITransactionProperties | ''
	label: string
	type?: 'primary' | 'dateTime'
	sortable: boolean
}
