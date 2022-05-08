import React from 'react'
import { Controller } from 'react-hook-form'

import { MenuItem } from '@mui/material'
import { IProps } from './types'

import {
	StyledRoot,
	StyledLabel,
	StyledSelect,
	StyledFormHelper,
} from './styles'

const Select = ({
	control,

	defaultValue,
	disabled,
	error,
	fullWidth = false,
	label,
	required = false,
	name,

	options,
}: IProps) => (
	<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ field: { onChange, onBlur, value } }) => (
			<StyledRoot>
				{label && (
					<StyledLabel htmlFor={name}>
						{label} <span>{required && '*'}</span>
					</StyledLabel>
				)}
				<StyledSelect
					id={name}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					fullWidth={fullWidth}
					error={Boolean(error)}
				>
					{options.map((row, id) => (
						<MenuItem key={id} value={row.value}>
							{row.label}
						</MenuItem>
					))}
				</StyledSelect>
				<StyledFormHelper error={Boolean(error)}>{error}</StyledFormHelper>
			</StyledRoot>
		)}
	/>
)

export default Select
