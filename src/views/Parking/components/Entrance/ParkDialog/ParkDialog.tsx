import React from 'react'

import { Grid } from '@mui/material'
import FormSubmit from 'components/FormSubmit'
import Select from 'components/Select'
import Input from 'components/Input'
import Checkbox from 'components/Checkbox'
import Modal from 'components/Modal'

import { IProps } from './types'

const ParkDialog = ({
	open,
	entranceTitle,
	submitting,
	control,
	errors,
	onSubmit,
	handleClose,
	handleSubmit,
	watch,
	reset,
}: IProps) => {
	const onClose = () => {
		if (!submitting) {
			handleClose()
			reset()
		}
	}

	return (
		<Modal
			open={open}
			title={`Park Vehicle (${entranceTitle})`}
			handleClose={onClose}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container rowSpacing={2} columnSpacing={2.5}>
					<Grid item xs={12}>
						<Input
							control={control}
							error={errors.vehicle?.message}
							required
							fullWidth
							name='vehicle'
							label="Vehicle's Plate No."
							autoComplete='off'
						/>
					</Grid>
					<Grid item xs={12}>
						<Select
							label='Vehicle Type'
							name='parkedType'
							control={control}
							error={errors.parkedType?.message}
							fullWidth
							required
							options={[
								{ label: 'SP', value: 1 },
								{ label: 'MP', value: 2 },
								{ label: 'LP', value: 3 },
							]}
						/>
					</Grid>

					<Grid item xs={6}>
						<Input
							control={control}
							type='datetime-local'
							error={errors.parkTime?.message}
							fullWidth
							name='parkTime'
							label='Parking Time'
							disabled={watch('parkNow')}
						/>
					</Grid>

					<Grid item xs={6}>
						<Checkbox
							control={control}
							name='parkNow'
							label='Park Now'
							defaultValue
						/>
					</Grid>
				</Grid>
				<FormSubmit
					submitting={submitting}
					actionText='Park'
					handleClose={onClose}
				/>
			</form>
		</Modal>
	)
}

export default ParkDialog
