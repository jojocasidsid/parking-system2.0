import React, { useState } from 'react'
import renderer from 'react-test-renderer'

// packages
import { ThemeProvider } from '@mui/material/styles'

// config
import theme from 'config/theme'

// component
import { IFilters } from 'hooks/useListingTable'
import Search from './Search'

describe('Search Component', () => {
	it('should render search component without crashing', () => {
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
					<Search
						setValue={setFilters}
						value={filters.q}
						placeholder='search'
						label='Search'
					/>
				</ThemeProvider>
			)
		}

		const tree = renderer.create(<Component />)
		expect(tree).toMatchSnapshot()
	})
})
