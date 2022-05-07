import {
	Control,
	FieldError,
	UseFormHandleSubmit,
	UseFormReset,
	UseFormSetValue,
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

	onSubmit: (data: IValidationSchema) => void
	handleSubmit: UseFormHandleSubmit<IValidationSchema>
	handleClose: () => void
	reset: UseFormReset<IValidationSchema>
	setValue: UseFormSetValue<IValidationSchema>
	watch: UseFormWatch<IValidationSchema>
}
