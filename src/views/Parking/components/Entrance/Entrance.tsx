import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'

import { useSnackbar } from 'notistack'
import { SlotsApi } from 'apis'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
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
		setValue,
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
			const searchVehicle = await SlotsApi.searchVehicle(vehicle)
			const isVehicle = _.get(searchVehicle, 'data', []).length

			if (isVehicle) {
				throw new Error(`Vehicle (${vehicle}) is already parked`)
			}

			// get neareast slot
			console.log({ parkedType })
			console.log({ entranceTitle })
			const getParking = await SlotsApi.getNearest(parkedType, entranceTitle)
			console.log({ getParking })
			// throw error if no slot available
			if (getParking.data.length) {
				throw new Error('There is no available slot')
			}

			// park on that nearest slot
			const nearestParkingSlotId = getParking.data[0].id
			console.log({ nearestParkingSlotId })
			await SlotsApi.parkSlot(
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
		} catch (error) {
			const errorMessage = _.get(error, 'message', '')
			if (errorMessage) {
				enqueueSnackbar(errorMessage, {
					variant: 'error',
				})
			} else {
				enqueueSnackbar('Something went wrong', {
					variant: 'error',
				})
			}
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
				setValue={setValue}
			/>
			<Button onClick={() => handleOpen()}>
				<Typography variant='h3'>Park ({entranceTitle})</Typography>
			</Button>
		</div>
	)
}

export default Entrance
