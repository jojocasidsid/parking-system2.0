import React from 'react'
import { TableCell } from '@mui/material'
import { StyledTypography } from './styles'
import { IRows, IColumns } from '../../types'

interface IProps<Row extends IRows, Column extends IColumns<Row>> {
	row: Row
	column: Column
}

const Primary = <Row extends IRows, Column extends IColumns<Row>>({
	column,
	row,
}: IProps<Row, Column>) => {
	const data = row[column.id] ? row[column.id] : ''

	return (
		<TableCell>
			<StyledTypography>{data || '--'}</StyledTypography>
		</TableCell>
	)
}

export default Primary
