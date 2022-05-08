import React from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import { IColumns, IRows } from 'components/ListingTable/types'
import TableBodyCell from './TableBodyCell'

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
]

describe('Table Body Cell  Component', () => {
	it('should render Table Body Cell component without crashing', () => {
		const Component = () => (
			<ThemeProvider theme={theme}>
				<TableBodyCell rows={row} columns={columns} />
			</ThemeProvider>
		)

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
