export interface ITransactionProperties {
	id: number
	vehicle: string
	price: number
	transactionDate: string
	parkingType: number
	parkTime: string
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
	type?: 'primary'
	sortable: boolean
}
