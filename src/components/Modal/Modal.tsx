import * as React from 'react'

import { DialogProps } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {
	StyledDialog,
	StyledIconButton,
	StyledDialogTitle,
	StyledDialogContent,
	StyledDialogActions,
	StyledDivider,
} from './styles'

interface DialogTitleProps {
	id: string
	children?: React.ReactNode
	onClose: () => void
}

const DialogTitleClose = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props

	return (
		<StyledDialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<StyledIconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.text.primary,
						opacity: 0.5,
					}}
				>
					<CloseIcon />
				</StyledIconButton>
			) : null}
		</StyledDialogTitle>
	)
}

interface IProps extends Omit<DialogProps, 'title'> {
	open: boolean
	handleClose: () => void
	title?: string | JSX.Element
	children: React.ReactNode
	actions?: React.ReactNode
	paperProps?: {}
}

const Modal = ({
	open,
	handleClose,
	title,
	children,
	actions,
	paperProps,
	...dialogProps
}: IProps) => (
	<StyledDialog
		PaperProps={paperProps}
		onClose={handleClose}
		aria-labelledby='customized-dialog-title'
		open={open}
		{...dialogProps}
	>
		{title && (
			<>
				<DialogTitleClose id='customized-dialog-title' onClose={handleClose}>
					{title}
				</DialogTitleClose>
				<StyledDivider light />
			</>
		)}

		<StyledDialogContent>{children}</StyledDialogContent>
		{actions && <StyledDialogActions>{actions}</StyledDialogActions>}
	</StyledDialog>
)

export default Modal
