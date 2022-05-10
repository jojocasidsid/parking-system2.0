import React from 'react'

export interface IColumnProperties {
	id: string
	label: string
	type?: 'primary' | 'dateTime'
	sortable: boolean
}

export interface IRows {
	[index: string]: string | number
}

export interface IColumns<Row> extends IColumnProperties {
	id: Extract<keyof Row, string>
}

export interface IFilters {
	_order: 'asc' | 'desc' | undefined
	_sort: string
	_page: number
	_limit: number
	q: string
}

export interface IOptions {
	value: string | number
	label: string
}

export interface IProps {
	title?: string
	isPagination?: boolean
	isFilters?: boolean
	filters?: IFilters
	dense?: 'small' | 'medium'
	columns: IColumns<IRows>[]
	rows: IRows[]
	totalPages: number
	isLoading?: boolean
	emptyTableMessage?: string
	setFilters?: React.Dispatch<React.SetStateAction<IFilters>>
}
