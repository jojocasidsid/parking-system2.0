export interface IProps {
	title: string
	message: string
	open: boolean
	handleClose: () => void
	handleConfirm: () => void
	processing?: boolean
	paperProps?: {}
	closeButtonTitle?: string
}
