export interface ISlotData {
	id: number
	west: number
	east: number
	south: number
	vehicle: string
	type: 1 | 2 | 3
	parkedType: 0 | 1 | 2 | 3
	parkTime: null | string
	unparkTime: null | string
}

export interface IProps {
	data: ISlotData
	handleLeave: (id: number) => void
	handleCancelReservation: (id: number) => void
}
