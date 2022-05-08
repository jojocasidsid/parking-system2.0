import styled from '@emotion/styled'
import { Typography } from '@mui/material'

export interface IPageInputProps {
	error?: string
}

export const PageInput = styled.input<IPageInputProps>`
	border-radius: 2px 0px 0px 2px;
	padding: 7px 2px 7px 0px;
	text-align: center;
	width: 100%;
	font-style: normal;
	font-size: 14px;
	line-height: 16px;
	font-weight: 500;
	font-stretch: normal;
	height: 28px;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&:active,
	&:focus {
		border: 1px solid ${({ theme }) => theme.palette.primary.main};
		outline: none;
		box-shadow: none;
	}

	&:disabled {
		background-color: ${({ theme }) => theme.palette.text.secondary};
		pointer-events: none;
	}

	border: 1px solid
		${({ theme, error }) => {
			if (error) {
				return theme?.palette.error.main
			}
			return theme.palette.text.secondary
		}};
`

export const StyledTypography = styled(Typography)`
	color: #303643b3;
	font-weight: bold;
	font-size: 12px;
`
