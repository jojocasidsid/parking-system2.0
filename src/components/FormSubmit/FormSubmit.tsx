import React from 'react'
import { Button, Grid, CircularProgress } from '@mui/material'

interface IProps {
	submitting: boolean
	handleClose: () => void
	actionText: string
}

const FormSubmit = ({ submitting, handleClose, actionText }: IProps) => (
	<Grid item container xs={12} paddingTop={5}>
		<Grid item xs={6} />
		<Grid
			item
			xs={6}
			container
			columnSpacing={1.5}
			justifyContent='flex-end'
			flexDirection='row'
		>
			<Grid item>
				<Button
					variant='outlined'
					color='secondary'
					onClick={handleClose}
					disabled={submitting}
				>
					Cancel
				</Button>
			</Grid>
			<Grid item>
				<Button variant='contained' type='submit' disabled={submitting}>
					{submitting ? <CircularProgress size={24.5} /> : actionText}
				</Button>
			</Grid>
		</Grid>
	</Grid>
)

export default FormSubmit
