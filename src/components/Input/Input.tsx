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

	hideErrorMessage = false,
	inputRef,
}: IProps) => (
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
					onChange={onChange}
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

export default Input
