import React from 'react'
import { Controller } from 'react-hook-form'

import { MenuItem } from '@mui/material'
import { IProps } from './types'

import {
	StyledRoot,
	StyledLabel,
	StyledSelect,
	StyledArrowDown,
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
					value={value === -1 ? '' : value} // Workaround for out-of-range warnings, initial values for select inputs of number types are -1 as empty strings are not assignable
					fullWidth={fullWidth}
					// eslint-disable-next-line react/no-unstable-nested-components
					IconComponent={(props) => (
						<StyledArrowDown
							src='/assets/arrow-down.svg'
							alt='arrow-down'
							{...props}
						/>
					)}
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
