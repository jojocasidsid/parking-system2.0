import React from 'react'
import { FormControlLabel, Checkbox as MuiCheckBox } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IProps } from './types'
import { StyledRoot } from './styles'

const Checkbox = ({
	name,
	control,
	label,
	defaultValue,

	...rest
}: IProps) => (
	<FormControlLabel
		label={label}
		control={
			<Controller
				name={name}
				control={control}
				defaultValue={!!defaultValue}
				render={({ field }) => (
					<StyledRoot>
						<MuiCheckBox checked={field.value} onChange={field.onChange} {...rest} />
					</StyledRoot>
				)}
			/>
		}
	/>
)

export default Checkbox
