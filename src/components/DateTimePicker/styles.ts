import styled from '@emotion/styled'
import { InputLabel, TextField } from '@mui/material'
import { Theme } from '@mui/material/styles'

interface ITheme {}
interface IInput extends ITheme {
	errors?: boolean
	theme?: Theme
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
	color: ${({ theme, errors }: IInput) => {
		if (errors) {
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
		padding: 8px 16px 8px 16px;
		font-style: normal;
		font-size: 14px;
		font-weight: 500;
		font-stretch: normal;
		color: ${({ theme }) => theme.palette.text.primary};
	}

	fieldset {
		border: 1px solid ${({ theme }) => theme.palette.text.secondary};
		border-radius: 2px 0px 0px 2px;
		border-color: ${({ theme, errors }: IInput) =>
			errors
				? theme?.palette.error.main
				: theme?.palette.text.secondary} !important;
	}

	input.Mui-disabled {
		background-color: ${({ theme }) => theme.palette.text.secondary};
		pointer-events: none;
	}

	input.MuiInputBase-inputAdornedStart {
		padding-left: 0px;
	}

	input.MuiInputBase-inputAdornedEnd {
		padding-right: 8px;
	}

	.MuiFormHelperText-root {
		color: ${({ theme }) => theme.palette.error.main};
		margin-left: 0;
	}
`
