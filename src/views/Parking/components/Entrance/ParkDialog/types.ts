import {
	Control,
	FieldError,
	UseFormHandleSubmit,
	UseFormReset,
	UseFormWatch,
} from 'react-hook-form'
import { IValidationSchema } from '../schema'

export interface IProps {
	open: boolean
	entranceTitle: 'West' | 'East' | 'South'
	submitting: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control: Control<IValidationSchema, any>
	errors: {
		[key in keyof IValidationSchema]?: FieldError
	}

	handleSubmit: UseFormHandleSubmit<IValidationSchema>
	onSubmit: (data: IValidationSchema) => void
	handleClose: () => void
	reset: UseFormReset<IValidationSchema>
	watch: UseFormWatch<IValidationSchema>
}
