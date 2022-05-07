import React, { useEffect } from 'react'

import Modal from 'components/Modal'
import FormSubmit from 'components/FormSubmit'
import { useSnackbar } from 'notistack'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid } from '@mui/material'
import Checkbox from 'components/Checkbox'
import Input from 'components/Input'

import { validationSchema, defaultValues, IValidationSchema } from './schema'

import { IProps } from './types'

const UnparkDialog = ({
	open,
	slot,
	submitting,
	handleClose,
	onConfirmLeave,
}: IProps) => {
	const { enqueueSnackbar } = useSnackbar()

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

	const onSubmit = (data: IValidationSchema) => {
		const isLeaveNowCheckLaterBlank = !data.leaveNow && data.unparkTime === ''
		if (isLeaveNowCheckLaterBlank) {
			enqueueSnackbar(
				'Leave Later field has no values while leaveNow checkbox is unchecked',
				{
					variant: 'error',
				}
			)
			return
		}

		onConfirmLeave(data.leaveNow || false, data.unparkTime || '')
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
		<Modal open={open} title={`Leave Slot (${slot})`} handleClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container rowSpacing={2} columnSpacing={2.5}>
					<Grid item xs={12}>
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

					<Grid item xs={12}>
						<Checkbox
							control={control}
							name='leaveNow'
							label='Leave Immediately'
							defaultValue
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
