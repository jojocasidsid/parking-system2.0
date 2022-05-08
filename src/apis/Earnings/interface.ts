export interface ISlotData {
	price: number
	hours: number
	transactionDate: string
	vehicle: string
	parkingType: number
	parkTime: string
	unparkTime: string
}

export interface ITransactionList {
	id: number
	vehicle: string
	price: number
	transactionDate: string
	parkingType: number
	parkTime: string
	hours: number
}

export interface ITransactionPropertiesResponse {
	data: Array<ITransactionList>
	totalCount?: number
}
