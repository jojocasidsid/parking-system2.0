import React, { useEffect } from 'react'

import Modal from 'components/Modal'
import FormSubmit from 'components/FormSubmit'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid } from '@mui/material'
import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import moment from 'moment'

import { validationSchema, defaultValues, IValidationSchema } from './schema'

import { IProps } from './types'

const UnparkDialog = ({
	open,
	slot,
	submitting,
	handleClose,
	onConfirmLeave,
}: IProps) => {
	const {
		handleSubmit,
		control,
		reset,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		mode: 'all',
		reValidateMode: 'onChange',
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	const onClose = () => {
		handleClose()
		reset()
	}

	const onSubmit = async (data: IValidationSchema) => {
		onConfirmLeave(data.leaveNow || false, data.unparkTime || moment().format())
		reset()
		onClose()
	}

	const leaveNow = watch('leaveNow')
	useEffect(() => {
		if (leaveNow) {
			setValue('unparkTime', '')
		}
	}, [leaveNow])

	return (
		<Modal open={open} title={`Leave  Slot (${slot})`} handleClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container rowSpacing={2} columnSpacing={2.5}>
					<Grid item xs={6}>
						<Checkbox
							control={control}
							name='leaveNow'
							label='Leave Immediately'
							defaultValue
						/>
					</Grid>

					<Grid item xs={6}>
						<Input
							control={control}
							type='datetime-local'
							error={errors.unparkTime?.message}
							fullWidth
							name='unparkTime'
							label='Leave Later'
							disabled={leaveNow}
						/>
					</Grid>

					<FormSubmit
						submitting={submitting}
						actionText='Unpark'
						handleClose={onClose}
					/>
				</Grid>
			</form>
		</Modal>
	)
}

export default UnparkDialog
