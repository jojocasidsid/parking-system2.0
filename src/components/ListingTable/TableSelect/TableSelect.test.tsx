import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// types
import { IFilters } from 'hooks/useListingTable'

// component
import TableSelect from './TableSelect'

const SHOW_ITEMS_OPTIONS = [
	{ value: 10, label: '10' },
	{ value: 50, label: '50' },
	{ value: 100, label: '100' },
	{ value: 1000, label: '1000' },
]

describe('Table Selext Component', () => {
	it('should render Table select component without crashing', () => {
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
					<TableSelect
						name='_limit'
						filters={filters}
						setFilters={setFilters}
						fieldOptions={SHOW_ITEMS_OPTIONS}
					/>
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
