import { styled } from '@mui/material/styles'
import {
	DialogContent,
	DialogActions,
	DialogTitle,
	Divider,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'

export const StyledIconButton = styled(IconButton)`
	position: absolute;
	right: 8px;
	top: 8px;
	color: ${({ theme }) => theme.palette.text.primary};
`

export const StyledDialogTitle = styled(DialogTitle)`
	font-size: 16px;
	font-weight: bold;
	line-height: 19px;
	font-style: normal;
	padding-left: 20px !important;
	padding-right: 20px !important;
	padding-top: 20px !important;
	padding-bottom: 20px !important;
`

export const StyledDialogContent = styled(DialogContent)`
	padding-left: 20px;
	padding-right: 20px;
`

export const StyledDialogActions = styled(DialogActions)`
	padding-left: 20px;
	padding-right: 24px;
	padding-bottom: 30px;
`

export const StyledDivider = styled(Divider)`
	border-color: ${({ theme }) => theme.palette.divider};
`
