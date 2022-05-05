import { Control } from 'react-hook-form'

export interface IOptions {
	label: string
	value: string | number
}
export interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: Control<any, object> // To do: change any type
	children: React.ReactNode
	defaultValue?: string
	disabled?: boolean
	error?: string
	fullWidth?: boolean
	label?: string
	name: string
	placeholder?: string
	required?: boolean
	noController?: boolean
	options: IOptions[]
}
