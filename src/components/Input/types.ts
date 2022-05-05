import React from 'react'
import { Control } from 'react-hook-form'

export interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: Control<any, object> // To do: change any type
	defaultValue?: string
	disabled?: boolean
	error?: string
	fullWidth?: boolean
	label?: string
	name: string
	placeholder?: string
	required?: boolean
	type?: string
	startIcon?: JSX.Element | string
	endIcon?: JSX.Element | string
	multiline?: boolean
	rows?: number
	small?: boolean
	maxLength?: number
	acceptsOnly?: 'alpha' | 'alphanumeric' | 'numeric'
	hideErrorMessage?: boolean
	inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>
}

export interface IMaskedInputProps extends IProps {
	mask: string
	maskPlaceholder?: string
}
