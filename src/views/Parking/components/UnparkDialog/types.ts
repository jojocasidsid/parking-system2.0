export interface IProps {
	open: boolean
	slot: number
	submitting: boolean

	handleClose: () => void
	onConfirmLeave: (leaveNow: boolean, leaveDate: string) => void
}
