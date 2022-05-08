import React from 'react'
import { TableBody } from '@mui/material'

import Primary from './Primary'

import { StyledTableRow } from './styles'
import { IRows, IColumns } from '../types'

interface IProps<Row extends IRows, Column extends IColumns<Row>> {
	columns: Column[]
	rows: Row[]
}

const TableBodyCell = <Row extends IRows, Column extends IColumns<Row>>({
	columns,
	rows,
}: IProps<Row, Column>) => (
	<TableBody>
		{rows.map((row, rowIndex: number) => (
			<StyledTableRow key={`row-${rowIndex}`} hover>
				{columns.map((column: Column, columnIndex: number) => (
					<Primary
						key={`${row[column.id]}-${rowIndex}-${columnIndex}`}
						row={row}
						column={column}
					/>
				))}
			</StyledTableRow>
		))}
	</TableBody>
)

export default TableBodyCell
