import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// types
import { IFilters } from 'hooks/useListingTable'
import { IColumns, IRows } from './types'

// component
import ListingTable from './ListingTable'

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

const row = [
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
	{
		price: 5840,
		hours: 37.51265444444444,
		parkTime: '2022-05-07T00:14:38.954Z',
		parkingType: 2,
		transactionDate: '2022-05-08T21:45:24+08:00',
		vehicle: 'AVM1191',
		id: 1,
	},
]

describe('Listing table Component', () => {
	it('should render Listingtable component without crashing', () => {
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
					<ListingTable
						title='Transaction Listings'
						rows={row || []}
						columns={columns}
						isFilters
						filters={filters}
						setFilters={setFilters}
						isPagination
						totalPages={2}
						isLoading={false}
					/>
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
