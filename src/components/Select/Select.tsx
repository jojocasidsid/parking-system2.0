import React from 'react'
import { Controller } from 'react-hook-form'

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
	children,
	defaultValue,
	disabled,
	error,
	fullWidth = false,
	label,
	required = false,
	name,
	noController = false,
}: IProps) =>
	noController ? (
		<StyledRoot>
			{label && (
				<StyledLabel htmlFor={name}>
					{label} <span>{required && '*'}</span>
				</StyledLabel>
			)}
			<StyledSelect
				name={name}
				id={name}
				disabled={disabled}
				error={Boolean(error)}
				fullWidth={fullWidth}
			>
				{children}
				{/* use MenuItems from material UI to declare children */}
			</StyledSelect>
		</StyledRoot>
	) : (
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
						{children}
						{/* use MenuItems from material UI to declare children */}
					</StyledSelect>
					<StyledFormHelper error={Boolean(error)}>{error}</StyledFormHelper>
				</StyledRoot>
			)}
		/>
	)

export default Select
