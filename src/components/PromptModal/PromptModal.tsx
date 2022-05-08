import * as React from 'react'
import { Button, CircularProgress } from '@mui/material'
import Modal from 'components/Modal'
import { IProps } from './types'
import { Message } from './styles'

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
