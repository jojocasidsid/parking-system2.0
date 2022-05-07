import React, { useState } from 'react'

// packages
import _ from 'lodash'
import moment from 'moment'
import { useSnackbar } from 'notistack'
import { Typography } from '@mui/material'

// apis
import { SlotsApi, EarningsApi } from 'apis'

// queries
import { useFetchSlot, useFetchEarnings } from 'queries'

// helpers
import {
	computeTransaction,
	getSumBykey,
	getTimeDifference,
	continousRateCalculation,
} from 'helpers'

// components
import LoadingIndicator from 'components/LoadingIndicator'
import Page from 'components/Page'
import Entrance from './components/Entrance'
import UnparkDialog from './components/UnparkDialog'
import Slot from './components/Slot'

// interface
import { ISlotData } from './components/Slot/types'

// styles
import { SlotsWrapper, ParkingWrapper, StyledRoot } from './styles'

const Parking = () => {
	const { enqueueSnackbar } = useSnackbar()

	const {
		isLoading: isLoadingSlot,
		data: slotData,
		refetch: slotRefetch,
	} = useFetchSlot()

	const {
		isLoading: isLoadingEarnings,
		data: earningsData,
		refetch: earningsRefetch,
	} = useFetchEarnings()

	const [openLeave, setOpenLeave] = useState(false)
	const [awaitingDeleteResponse, setAwaitingDeleteResponse] = useState(false)
	const [leaveTargetId, setLeaveTargetId] = useState(0)

	const openModalLeave = (id: number) => {
		setOpenLeave(true)
		setLeaveTargetId(id)
	}

	const closeModalLeave = () => {
		if (!awaitingDeleteResponse) {
			setOpenLeave(false)
			setLeaveTargetId(0)
		}
	}

	const onConfirmLeave = async (leaveNow: boolean, leaveTime: string) => {
		setAwaitingDeleteResponse(true)

		try {
			if (!leaveTargetId) throw new Error('This is not a valid slot')

			// check slot for validation
			const slot = await SlotsApi.getSlot(leaveTargetId)
			const { parkedType, parkTime, vehicle, type } = _.get(slot, 'data')

			if (parkTime >= leaveTime) {
				throw new Error('Leave time should be later than park time')
			}
			// throw error if no car parked
			if (!parkedType || !vehicle) {
				throw new Error('There is no car parked in here')
			}

			// get all transactions within 1 hour
			const getVehicleTransactionsWithin1Hour =
				await EarningsApi.getVehicleTransactionsWithin1Hour(vehicle)
			const transactions = _.get(getVehicleTransactionsWithin1Hour, 'data', [])

			// compute current fee
			const currentTimeDiff = getTimeDifference(parkTime, leaveTime)
			const currentTmeDiffRoundUp = Math.ceil(currentTimeDiff)
			const currentFee = computeTransaction(currentTmeDiffRoundUp, type)

			// check if there is transaction
			const isThereTransaction = Boolean(transactions.length)
			if (isThereTransaction) {
				// apply continous rate
				const totalFees = continousRateCalculation(
					transactions,
					currentTimeDiff,
					type,
					leaveTime
				)
				// store the exact hour not the rounded one
				await EarningsApi.add({
					price: totalFees,
					hours: currentTimeDiff,
					parkTime,
					parkingType: type,
					transactionDate: moment().format(),
					vehicle,
				})
			} else {
				// not eligible for continous rate
				await EarningsApi.add({
					price: currentFee,
					hours: currentTimeDiff,
					parkTime,
					parkingType: type,
					transactionDate: moment().format(),
					vehicle,
				})
			}

			const isLeaveNow = leaveNow || leaveTime === ''
			if (isLeaveNow) await SlotsApi.leaveSlot(leaveTargetId)
			else await SlotsApi.setLeaveSlot(leaveTargetId, leaveTime)

			slotRefetch()
			earningsRefetch()
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

		setAwaitingDeleteResponse(false)
	}

	if (isLoadingSlot || isLoadingEarnings) {
		return <LoadingIndicator />
	}

	return (
		<Page title='Parking System'>
			<UnparkDialog
				open={openLeave}
				slot={leaveTargetId}
				submitting={awaitingDeleteResponse}
				handleClose={closeModalLeave}
				onConfirmLeave={onConfirmLeave}
			/>
			<StyledRoot>
				<Typography variant='h1'>
					Earnings: {earningsData && getSumBykey(earningsData.data, 'price')}{' '}
				</Typography>
				<ParkingWrapper>
					<Entrance entranceTitle='West' slotRefetch={slotRefetch} />
					<SlotsWrapper>
						{slotData &&
							slotData.data.map((row: ISlotData, key: number) => (
								<Slot key={key} data={row} handleLeave={(id) => openModalLeave(id)} />
							))}
					</SlotsWrapper>
					<Entrance entranceTitle='East' slotRefetch={slotRefetch} />
				</ParkingWrapper>
				<Entrance entranceTitle='South' slotRefetch={slotRefetch} />
			</StyledRoot>
		</Page>
	)
}

export default Parking
