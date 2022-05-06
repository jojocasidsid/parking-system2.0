import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'

import { useSnackbar } from 'notistack'
import SlotsAPI from 'apis/Slots/SlotsApi'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IProps } from './types'
import ParkDialog from './ParkDialog'
import { defaultValues, validationSchema, IValidationSchema } from './schema'

const Entrance = ({ entranceTitle, slotRefetch }: IProps) => {
	const [open, setIsOpen] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const { enqueueSnackbar } = useSnackbar()

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen(true)
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
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = async (data: IValidationSchema) => {
		setSubmitting(true)
		const { parkedType, vehicle, parkNow, parkTime } = data
		try {
			// get neareast slot
			const getParking = await SlotsAPI.getNearest(parkedType, entranceTitle)

			// throw error if no slot available
			if (!getParking) {
				throw new Error('There is no available slot')
			}

			// park on that nearest slot
			const nearestParkingSlotId = getParking.data[0].id
			await SlotsAPI.parkSlot(
				nearestParkingSlotId,
				parkedType,
				vehicle,
				parkNow || false,
				parkTime || ''
			)

			enqueueSnackbar('Vehicle has been successfully parked.', {
				variant: 'success',
			})

			slotRefetch()
		} catch (e) {
			enqueueSnackbar(`Encountered an error`, { variant: 'error' })
		}
		setSubmitting(false)
		handleClose()
		reset()
	}

	return (
		<div>
			<ParkDialog
				open={open}
				handleClose={handleClose}
				entranceTitle={entranceTitle}
				onSubmit={onSubmit}
				submitting={submitting}
				handleSubmit={handleSubmit}
				control={control}
				errors={errors}
				watch={watch}
				reset={reset}
			/>
			<Button onClick={() => handleOpen()}>
				<Typography variant='h3'>Park ({entranceTitle})</Typography>
			</Button>
		</div>
	)
}

export default Entrance
