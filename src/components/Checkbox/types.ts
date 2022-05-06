import { Control } from 'react-hook-form'

export interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: Control<any, object> // To do: change any type
	label: string
	name: string
	defaultValue?: boolean
	disabled?: boolean
	error?: string
	fullWidth?: boolean
	required?: boolean
	noController?: boolean
	value?: boolean
	onChange?: () => {}
}
