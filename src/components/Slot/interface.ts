export interface IData {
	id: number
	parked: string
	exitA: number
	exitB: number
	exitC: number
	vehicle: string
	type: 1 | 2 | 3
	parkedType: 1 | 2 | 3
	parkTime: null | 'string'
	unparkTime: null | 'string'
}

export interface IProps {
	data: IData
	handleLeave: (id: number) => void
}
