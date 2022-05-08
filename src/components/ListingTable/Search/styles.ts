import styled from '@emotion/styled'
import { InputLabel, TextField } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface IInput {
	error?: boolean
	theme?: Theme
	small?: boolean
}

export const StyledRoot = styled('div')`
	display: block;
`

export const StyledLabel = styled(InputLabel)`
	text-align: 'left';
	letter-spacing: 0.12px;
	padding-bottom: 8px;

	font-style: normal;
	font-size: 12px;
	line-height: 14px;
	font-weight: 600;
	font-stretch: normal;
	white-space: normal;
	//has error
	color: ${({ theme, error }: IInput) => {
		if (error) {
			return theme?.palette.error.main
		}
		return theme?.palette.text.primary
	}};
	& span {
		color: ${({ theme }) => theme.palette.error.main};
	}

	display: block;
`

export const StyledInput = styled(TextField)`
	input {
		padding: ${({ small }: IInput) =>
			small ? '2px 8px 2px 8px' : '8px 12px 8px 16px'};
		font-style: normal;
		font-size: 14px;
		font-weight: 500;
		font-stretch: normal;
		color: ${({ theme }) => theme?.palette.text.primary};
	}

	fieldset {
		border: 1px solid ${({ theme }) => theme.palette.text.secondary};
		border-radius: 2px 0px 0px 2px;
	}

	input.Mui-disabled {
		background-color: ${({ theme }) => theme.palette.text.secondary};
		pointer-events: none;
	}

	input.MuiInputBase-inputAdornedStart {
		padding-left: 0px !important;
	}

	input.MuiInputBase-inputAdornedEnd {
		padding-right: 0px;
	}

	.MuiInputBase-adornedEnd div.MuiInputAdornment-root {
		background-color: ${({ theme }) => theme.palette.primary.contrastText};
		padding: 16px 16px 16px 16px;
		padding-right: 0px !important;
	}

	.MuiInputBase-adornedStart {
		padding-left: 0px !important;
	}

	.MuiInputBase-adornedStart .MuiInputAdornment-root {
		background-color: ${({ theme }) => theme.palette.primary.contrastText};
		padding: 16px 16px 16px 16px;
	}

	.MuiFormHelperText-root {
		margin-left: 0;
	}
`
