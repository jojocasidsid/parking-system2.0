import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'

import { Select } from '@mui/material'

interface rootInterface {
	fullWidth?: boolean
}
interface IStyled {
	theme?: Theme
}
interface IStyledSelect extends IStyled {
	pagination?: boolean
}

export const StyledRoot = styled('div')`
	${(props: rootInterface) =>
		props.fullWidth ? 'width: 100%' : 'max-width: 225px'};
	display: block;
`

export const StyledLabel = styled('label')`
	text-align: 'left';
	letter-spacing: 0.12px;
	padding-bottom: 8px;
	font-style: normal;
	font-size: 14px;
	line-height: 14px;
	font-weight: 600;
	font-stretch: normal;
	color: #303643;
	opacity: 0.5;

	& span {
		color: ${({ theme }) => theme.palette.error.main};
	}

	display: block;
`

export const StyledSelect = styled(Select)`
	min-width: ${({ pagination }: IStyledSelect) =>
		pagination ? '60px' : '150px'};

	& .MuiSelect-select {
		padding: 9px 24px 7px 12px !important;
		font-style: normal;
		font-size: 12px;
		line-height: 14px;
		font-weight: bold;
	}
	fieldset {
		border: 1px solid ${({ theme }) => theme.palette.text.secondary};
		border-radius: 2px 0px 0px 2px;
	}

	&.Mui-disabled {
		background-color: ${({ theme }) => theme.palette.text.secondary};
		pointer-events: none;
	}
`
