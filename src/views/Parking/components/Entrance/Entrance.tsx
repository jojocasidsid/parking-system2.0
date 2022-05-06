import React, { useState } from 'react'
import { Button } from '@mui/material'

import { useSnackbar } from 'notistack'
import SlotsAPI from 'apis/Slots/SlotsApi'
import { IProps } from './types'
import ParkDialog from './ParkDialog'
import { IValidationSchema } from './ParkDialog/schema'

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

	const onSubmit = async (data: IValidationSchema) => {
		setSubmitting(true)
		const { parkedType, vehicle } = data
		try {
			const getParking = await SlotsAPI.getNearest(parkedType, entranceTitle)

			if (!getParking) {
				throw new Error('There is no available slot')
			}

			const nearestParkingSlotId = getParking.data[0].id
			SlotsAPI.parkSlot(nearestParkingSlotId, parkedType, vehicle)

			enqueueSnackbar('Vehicle has been successfully parked.', {
				variant: 'success',
			})

			slotRefetch()
		} catch (e) {
			enqueueSnackbar(`Encountered an error`, { variant: 'error' })
		}
		setSubmitting(false)
		handleClose()
	}

	return (
		<div>
			<ParkDialog
				open={open}
				handleClose={handleClose}
				entranceTitle={entranceTitle}
				onSubmit={onSubmit}
				submitting={submitting}
			/>
			<Button onClick={() => handleOpen()}>Park ({entranceTitle})</Button>
		</div>
	)
}

export default Entrance
