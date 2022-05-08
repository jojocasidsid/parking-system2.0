import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import { IFilters } from 'hooks/useListingTable'
import TableFilters from './TableFilters'

describe('Table Filters  Component', () => {
	it('should render Table Filters component without crashing', () => {
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
					<TableFilters filters={filters && filters} setFilters={setFilters} />
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
