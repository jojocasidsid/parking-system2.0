export interface ISlotData {
	id: number
	exitA: number
	exitB: number
	exitC: number
	vehicle: string
	type: 1 | 2 | 3
	parkedType: 0 | 1 | 2 | 3
	parkTime: null | 'string'
	unparkTime: null | 'string'
}

export interface IProps {
	data: ISlotData
	handleLeave: (id: number) => void
}
