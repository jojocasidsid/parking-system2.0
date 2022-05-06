import React from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Control, Controller } from 'react-hook-form'
import { StyledInput, StyledLabel, StyledRoot } from './styles'

interface IProps {
	fullWidth?: boolean
	label?: string
	required?: boolean
	name: string
	error?: string
	noController?: boolean
	defaultValue?: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: Control<any, object>
	disabled?: boolean
}

const DatePicker = ({
	fullWidth,
	label,
	required,
	error,
	name,
	control,
	defaultValue,
	disabled,
}: IProps) => (
	<LocalizationProvider dateAdapter={AdapterMoment}>
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<StyledRoot>
					{label && (
						<StyledLabel htmlFor={name} errors={Boolean(error)}>
							{label} <span>{required && '*'}</span>
						</StyledLabel>
					)}

					<DateTimePicker
						value={field.value}
						onChange={field.onChange}
						disabled={disabled}
						renderInput={(params) => (
							<StyledInput
								id={name}
								onBlur={field.onBlur}
								name={name}
								helperText={error}
								errors={Boolean(error)}
								fullWidth={fullWidth}
								{...params}
							/>
						)}
					/>
				</StyledRoot>
			)}
			defaultValue={defaultValue}
		/>
	</LocalizationProvider>
)

export default DatePicker
