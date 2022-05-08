import React from 'react'
import Grid from '@mui/material/Grid'
import Search from '../Search'
import { IFilters } from '../types'

interface IProps {
	filters?: IFilters
	setFilters?: React.Dispatch<React.SetStateAction<IFilters>>
}

const TableFilters = ({ filters, setFilters }: IProps) => (
	<Grid item xs='auto'>
		{filters && typeof filters.q !== 'undefined' && (
			<Search value={filters && filters.q} setValue={setFilters} />
		)}
	</Grid>
)

export default TableFilters
