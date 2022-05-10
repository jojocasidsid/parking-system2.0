import React from 'react'
import { TableCell } from '@mui/material'
import moment from 'moment'
import { StyledTypography } from './styles'
import { IRows, IColumns } from '../../types'

interface IProps<Row extends IRows, Column extends IColumns<Row>> {
	row: Row
	column: Column
	dateTime?: boolean
}

const Primary = <Row extends IRows, Column extends IColumns<Row>>({
	column,
	row,
	dateTime,
}: IProps<Row, Column>) => {
	let data = row[column.id] ? row[column.id] : ''
	if (dateTime) {
		data = moment(data).format('MMMM Do YYYY, h:mm:ss a')
	}

	return (
		<TableCell>
			<StyledTypography>{data || '--'}</StyledTypography>
		</TableCell>
	)
}

export default Primary
