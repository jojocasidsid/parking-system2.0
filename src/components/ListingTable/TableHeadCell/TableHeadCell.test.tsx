import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import { IColumns, IRows } from 'components/ListingTable/types'
import { IFilters } from 'hooks/useListingTable'
import TableHeadCell from './TableHeadCell'

export const columns: IColumns<IRows>[] = [
	{
		id: 'id',
		label: 'ID',
		sortable: true,
	},
	{
		id: 'vehicle',
		label: 'Plate Number',
		sortable: false,
	},
	{
		id: 'parkingType',
		label: 'Parking Type',
		sortable: true,
	},

	{
		id: 'hours',
		label: 'Hours Spent',
		sortable: true,
	},

	{
		id: 'price',
		label: 'Price',
		sortable: false,
	},

	{
		id: 'transactionDate',
		label: 'Transaction Date',
		sortable: true,
	},
]

describe('Table Body Cell  Component', () => {
	it('should render Table Body Cell component without crashing', () => {
		const Component = () => {
			const [filters, setFilters] = useState<IFilters>({
				_order: 'asc',
				_sort: '',
				_page: 1,
				_limit: 20,
				q: '',
			})

			return (
				<ThemeProvider theme={theme}>
					<TableHeadCell
						isFilters
						filters={filters}
						setFilters={setFilters}
						columns={columns}
					/>
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
