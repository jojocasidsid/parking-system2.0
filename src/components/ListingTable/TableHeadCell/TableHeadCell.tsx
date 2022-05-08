import React from 'react'

import {
	Box,
	TableHead,
	TableRow,
	TableSortLabel,
	TableCell,
} from '@mui/material'

import { visuallyHidden } from '@mui/utils'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import styled from '@emotion/styled'

import { StyledTableHeadTypography } from './styles'
import { IColumns, IFilters, IRows } from '../types'

const StyledTableCell = styled(TableCell)`
	white-space: nowrap;
`

interface IProps {
	isFilters?: boolean
	filters?: IFilters
	setFilters?: React.Dispatch<React.SetStateAction<IFilters>>
	columns: IColumns<IRows>[]
}

const TableHeadCell = ({ isFilters, filters, columns, setFilters }: IProps) => {
	const sortIdentifier = (sort: 'asc' | 'desc') => {
		if (sort === 'asc') {
			return 'desc'
		}
		if (sort === 'desc') {
			return 'asc'
		}
		return 'asc'
	}

	return (
		<TableHead>
			<TableRow>
				{columns.map((column) =>
					isFilters && filters ? (
						<StyledTableCell
							style={{ whiteSpace: 'nowrap' }}
							key={column.id}
							sortDirection={filters._sort === column.id ? filters._order : false}
						>
							{column.sortable ? (
								<TableSortLabel
									active={filters._sort === column.id ? true : undefined}
									direction={filters._order}
									onClick={() =>
										setFilters &&
										setFilters(
											(prevState: IFilters): IFilters => ({
												...prevState,
												_sort: column.id,
												_order: sortIdentifier(filters._order ? filters._order : 'asc'),
											})
										)
									}
									IconComponent={ArrowDropDownIcon}
								>
									<StyledTableHeadTypography>{column.label}</StyledTableHeadTypography>
									{filters._sort === column.id ? (
										<Box component='span' sx={visuallyHidden}>
											{filters._sort === 'desc' ? 'sorted descending' : 'sorted ascending'}
										</Box>
									) : null}
								</TableSortLabel>
							) : (
								<StyledTableHeadTypography>{column.label}</StyledTableHeadTypography>
							)}
						</StyledTableCell>
					) : (
						<StyledTableCell key={column.id}>
							<StyledTableHeadTypography>{column.label}</StyledTableHeadTypography>
						</StyledTableCell>
					)
				)}
			</TableRow>
		</TableHead>
	)
}

export default TableHeadCell
