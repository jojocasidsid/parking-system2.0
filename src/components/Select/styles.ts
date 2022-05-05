import styled from '@emotion/styled'
import { Theme } from '@mui/material/styles'
import { Select, FormHelperText } from '@mui/material'

interface IStyled {
	theme?: Theme
}
interface IStyledSelect extends IStyled {
	error?: boolean
}

export const StyledRoot = styled('div')`
	display: block;
`

export const StyledLabel = styled('label')`
	text-align: 'left';
	letter-spacing: 0.12px;
	padding-bottom: 8px;
	font-style: normal;
	font-size: 12px;
	line-height: 14px;
	font-weight: 600;
	font-stretch: normal;
	white-space: normal;

	//has errors
	color: ${({ theme, error }: IStyledSelect) => {
		if (error) {
			return theme?.palette.error.main
		}
		return theme?.palette.text.secondary
	}};

	& span {
		color: ${({ theme }) => theme.palette.error.main};
	}

	display: block;
`

export const StyledSelect = styled(Select)`
	min-width: 120px;

	& .MuiSelect-select {
		padding: 8px 16px 8px 16px;
		font-style: normal;
		font-size: 14px;
		font-weight: 500;
		font-stretch: normal;
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

export const StyledArrowDown = styled('img')`
	width: 13px;
`

export const StyledFormHelper = styled(FormHelperText)`
	color: ${({ theme }) => theme.palette.error.main};
`
