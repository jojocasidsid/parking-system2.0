import React from 'react'
import { Grid, Pagination as MuiPagination } from '@mui/material'
import { IFilters } from '../types'
import { StyledTypography } from './styles'
import TableSelect from '../TableSelect'

const SHOW_ITEMS_OPTIONS = [
	{ value: 10, label: '10' },
	{ value: 50, label: '50' },
	{ value: 100, label: '100' },
	{ value: 1000, label: '1000' },
]

interface IProps {
	totalPages: number
	filters?: IFilters
	setFilters?: React.Dispatch<React.SetStateAction<IFilters>>
}
const Pagination = ({ totalPages, filters, setFilters }: IProps) => (
	<Grid
		item
		container
		xs={12}
		paddingTop={1.5}
		paddingBottom={1.5}
		paddingLeft={2.5}
		paddingRight={2.5}
	>
		<Grid item container alignItems='flex-end'>
			<Grid
				item
				container
				xs='auto'
				flexDirection='row'
				spacing={1}
				alignItems='center'
			>
				<Grid item>
					<StyledTypography>Show</StyledTypography>
				</Grid>
				<Grid item>
					<TableSelect
						name='_limit'
						filters={filters}
						setFilters={setFilters}
						fieldOptions={SHOW_ITEMS_OPTIONS}
					/>
				</Grid>
				<Grid item>
					<StyledTypography>transactions</StyledTypography>
				</Grid>
			</Grid>
			<Grid item xs />

			<Grid item xs='auto' marginLeft={4}>
				<MuiPagination
					count={totalPages}
					page={filters?._page || 1}
					onChange={(event: React.ChangeEvent<unknown>, value: number) =>
						setFilters &&
						setFilters((prev: IFilters) => ({
							...prev,
							_page: value as number,
						}))
					}
				/>
			</Grid>
		</Grid>
	</Grid>
)

export default Pagination
