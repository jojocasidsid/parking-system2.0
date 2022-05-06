import React from 'react'
import Modal from 'components/Modal'

import { Grid } from '@mui/material'
import FormSubmit from 'components/FormSubmit'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Select from 'components/Select'
import Input from 'components/Input'
import { IProps } from './types'
import { IValidationSchema, validationSchema } from './schema'

const ParkDialog = ({
	open,
	handleClose,
	entranceTitle,
	onSubmit,
	submitting,
}: IProps) => {
	const values: IValidationSchema = {
		vehicle: '',
		parkedType: 0,
	}
	const {
		handleSubmit,
		control,
		reset,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'all',
		reValidateMode: 'onChange',
		defaultValues: values,
		resolver: yupResolver(validationSchema),
	})

	const onClose = () => {
		if (!submitting) {
			handleClose()
			reset()
		}
	}

	console.log(watch('parkedType'))
	console.log(watch('vehicle'))
	console.log(errors)

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
