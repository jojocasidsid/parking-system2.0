import * as React from 'react'

// packages
import {
	Box,
	Table,
	TableContainer,
	Typography,
	Grid,
	Divider,
} from '@mui/material'

// components
import LoadingIndicator from 'components/LoadingIndicator'

// table related components
import TableFilters from './TableFilters'
import TableBodyCell from './TableBodyCell'
import TableHeadCell from './TableHeadCell'
import Pagination from './Pagination'

// interface
import { IProps } from './types'

// types
import { StyledTypography } from './styles'

const ListingTable = ({
	title,
	isPagination,
	isFilters,
	filters,
	dense,
	columns,
	rows,
	totalPages,
	isLoading,
	emptyTableMessage,
	setFilters,
}: IProps) => (
	<div aria-labelledby='tableHeading'>
		<Grid container>
			<Grid item xs={12} container padding={2.5}>
				{title && (
					<Grid item paddingBottom={3.5}>
						<Typography id='tableHeading' variant='h1' fontWeight='bold'>
							{title}
						</Typography>
					</Grid>
				)}
				<Grid item container columnSpacing={1.5}>
					{isFilters && (
						<TableFilters filters={filters && filters} setFilters={setFilters} />
					)}
				</Grid>
			</Grid>
			<Box width='100%'>
				<Divider style={{ opacity: 0.3 }} />
			</Box>
			<TableContainer>
				<Table aria-labelledby='tableTitle' size={dense || 'medium'} stickyHeader>
					<TableHeadCell
						isFilters={isFilters}
						filters={filters}
						setFilters={setFilters}
						columns={columns}
					/>
					{!isLoading && <TableBodyCell columns={columns} rows={rows} />}
				</Table>
			</TableContainer>
			{isLoading && (
				<Grid container justifyContent='center' padding={2}>
					<Grid item>
						<LoadingIndicator />
					</Grid>
				</Grid>
			)}
			{rows.length === 0 && !isLoading && (
				<Grid container justifyContent='center' padding={2}>
					<Grid item>
						<StyledTypography>{emptyTableMessage}</StyledTypography>
					</Grid>
				</Grid>
			)}
			{isPagination && (
				<Pagination
					filters={filters}
					setFilters={setFilters}
					totalPages={totalPages}
				/>
			)}
		</Grid>
	</div>
)

export default ListingTable
