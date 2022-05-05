import React from 'react'

import { Controller } from 'react-hook-form'
import { InputAdornment } from '@mui/material'
import { IProps } from './types'
import { StyledInput, StyledLabel, StyledRoot } from './styles'

const Input = ({
	control,
	defaultValue,
	error,
	label,
	name,
	disabled,
	required = false,
	placeholder,
	fullWidth,
	type,
	startIcon,
	endIcon,
	multiline,
	rows,
	maxLength,
	acceptsOnly,
	hideErrorMessage = false,
	inputRef,
}: IProps) => {
	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
		onChange: (...event: any[]) => void // to do: change any type
	) => {
		const val = e.target.value

		if (!acceptsOnly || String(val).length === 0) {
			onChange(e)

			return
		}

		if (acceptsOnly === 'alpha' && /^[A-Za-z ]+$/.test(val)) {
			onChange(e)
		}

		if (acceptsOnly === 'numeric' && /^[0-9]+$/.test(val)) {
			onChange(e)
		}

		if (acceptsOnly === 'alphanumeric' && /^[A-Za-z0-9.'\- ]+$/) {
			onChange(e)
		}
	}

	return (
		<Controller
			name={name}
			control={control}
			data-testid={name}
			render={({ field: { onChange, onBlur, value } }) => (
				<StyledRoot>
					{label && (
						<StyledLabel htmlFor={name} error={Boolean(error)}>
							{label} <span>{required && '*'}</span>
						</StyledLabel>
					)}
					<StyledInput
						id={name}
						name={name}
						onChange={(e) => handleChange(e, onChange)}
						onBlur={onBlur}
						type={type}
						value={value}
						placeholder={placeholder}
						disabled={disabled}
						error={Boolean(error)}
						helperText={!hideErrorMessage ? error : undefined}
						fullWidth={fullWidth}
						inputProps={{
							maxLength,
						}}
						// eslint-disable-next-line react/jsx-no-duplicate-props
						InputProps={{
							startAdornment: startIcon && (
								<InputAdornment position='start'>{startIcon}</InputAdornment>
							),
							endAdornment: endIcon && (
								<InputAdornment position='start'>{endIcon}</InputAdornment>
							),
						}}
						multiline={multiline}
						rows={rows}
						inputRef={inputRef}
					/>
				</StyledRoot>
			)}
			defaultValue={defaultValue}
		/>
	)
}

export default Input
