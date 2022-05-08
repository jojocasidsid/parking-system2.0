import { useState, useEffect } from 'react'
import useDebounce from 'hooks/useDebounce'
import { useNavigate } from 'react-router-dom'

export interface IFilters {
	_order: 'asc' | 'desc' | undefined
	_sort: string
	_page: number
	_limit: number
	q: string
}

export default function useListingTable(filterProps?: IFilters) {
	const navigate = useNavigate()
	const [filters, setFilters] = useState<IFilters>(
		filterProps || {
			_order: 'asc',
			_sort: '',
			_page: 1,
			_limit: 20,
			q: '',
		}
	)

	const debouncedFilters = useDebounce(filters, 500)

	const [loading, setLoading] = useState(false)
	useEffect(() => {
		if (debouncedFilters) {
			setLoading(true)
		} else {
			setLoading(false)
		}
	}, [debouncedFilters])

	const [selected, setSelected] = useState<readonly string[]>([])

	return {
		navigate,
		filters,
		setFilters,
		loading,
		selected,
		setSelected,
		debouncedFilters,
	}
}
