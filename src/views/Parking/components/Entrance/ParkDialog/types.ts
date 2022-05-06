import { IValidationSchema } from './schema'

export interface IProps {
	open: boolean
	handleClose: () => void
	entranceTitle: 'West' | 'East' | 'South'
	onSubmit: (data: IValidationSchema) => void
	submitting: boolean
}
