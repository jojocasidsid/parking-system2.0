import * as React from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import Modal from 'components/Modal'

import { Message } from './styles'

export interface IProps {
	title: string
	message: string
	open: boolean
	handleClose: () => void
	handleConfirm: () => void
	processing?: boolean
	paperProps?: {}
	closeButtonTitle?: string
}

const PromptModal = (props: IProps) => {
	const {
		title,
		message,
		open,
		handleClose,
		handleConfirm,
		processing = false,
		paperProps,
		closeButtonTitle,
	} = props
	return (
		<Modal
			title={title}
			handleClose={handleClose}
			open={open}
			fullWidth
			maxWidth='xs'
			actions={
				<>
					<Button
						variant='outlined'
						color='secondary'
						onClick={handleClose}
						disabled={processing}
					>
						{closeButtonTitle || 'Cancel'}
					</Button>
					<Button variant='contained' onClick={handleConfirm} disabled={processing}>
						{processing ? <CircularProgress size={24.5} /> : 'Yes'}
					</Button>
				</>
			}
			paperProps={paperProps}
		>
			<Message>{message}</Message>
		</Modal>
	)
}

export default PromptModal
