import React from 'react'
// packages
import { Paper } from '@mui/material'

// queries
import { useFetchEarnings } from 'queries'

// hooks
import useListingTable from 'hooks/useListingTable'

// components
import ListingTable from 'components/ListingTable'

// constants
import { COLUMNS } from './constants'

const Transactions = () => {
	const { filters, setFilters, debouncedFilters } = useListingTable({
		_order: 'asc',
		_sort: '',
		_page: 1,
		_limit: 10,
		q: '',
	})

	const { isLoading, data: EarningsData } = useFetchEarnings(
		debouncedFilters,
		filters
	)
	const totalPages = Math.ceil(
		Number(EarningsData?.headers['x-total-count']) / filters._limit
	)

	return (
		<div>
			<Paper>
				<ListingTable
					title='Transaction Listings'
					rows={EarningsData?.data || []}
					columns={COLUMNS}
					isFilters
					filters={filters}
					setFilters={setFilters}
					isPagination
					totalPages={totalPages}
					isLoading={isLoading}
				/>
			</Paper>
		</div>
	)
}

export default Transactions
