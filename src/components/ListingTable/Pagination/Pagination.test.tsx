import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// types
import { IFilters } from 'hooks/useListingTable'

// component
import Pagination from './Pagination'

describe('Table Pagination Component', () => {
	it('should render pagination component without crashing', () => {
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
					<Pagination totalPages={16} filters={filters} setFilters={setFilters} />
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
