import * as React from 'react'

import { StyledRoot, StyledLabel, StyledInput } from './styles'
import { IFilters } from '../types'

interface ISearchProps {
	label?: string
	placeholder?: string
	value?: string
	setValue?: React.Dispatch<React.SetStateAction<IFilters>>
}

const Search = ({
	label = 'Search',
	placeholder = 'Search Transactions',
	value,
	setValue,
}: ISearchProps) => (
	<StyledRoot>
		{label && <StyledLabel htmlFor='search'>{label}</StyledLabel>}
		<StyledInput
			id='searchBar'
			placeholder={placeholder}
			InputLabelProps={{
				style: { color: '#303643' },
			}}
			InputProps={{
				disableUnderline: true,
			}}
			value={value}
			onChange={(event) =>
				setValue &&
				setValue((prevState) => ({ ...prevState, q: event.target.value }))
			}
		/>
	</StyledRoot>
)

export default Search
