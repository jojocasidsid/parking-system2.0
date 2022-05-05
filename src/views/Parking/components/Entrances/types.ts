export interface ParkData {
	id: number
	type: string
	vehicle: string
}

export interface IProps {
	handlePark: (data: ParkData) => void
	entrance: 'West' | 'South' | 'East'
}
