import React from 'react'
import { MenuItem } from '@mui/material'
import { StyledRoot, StyledLabel, StyledSelect } from './styles'
import { IFilters, IOptions } from '../types'

interface IProps {
	filters?: IFilters
	setFilters?: React.Dispatch<React.SetStateAction<IFilters>>
	label?: string
	name: keyof IFilters
	fieldOptions?: IOptions[]
}

const TableSelect = ({
	filters,
	setFilters,
	name,
	label,
	fieldOptions,
}: IProps) => (
	<StyledRoot fullWidth={false}>
		{label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
		<StyledSelect
			name={name}
			id={name}
			value={filters && filters[name]}
			onChange={(event) =>
				setFilters &&
				setFilters((prev) => ({
					...prev,
					[name]: event.target.value as string,
				}))
			}
			// eslint-disable-next-line react/no-unstable-nested-components
		>
			{fieldOptions?.map((row, index) => (
				<MenuItem value={row.value} key={`status-${index}-${row.value}`}>
					{row.label}
				</MenuItem>
			))}
		</StyledSelect>
	</StyledRoot>
)

export default TableSelect
