import { useState } from 'react'

// packages\
import _ from 'lodash'
import moment from 'moment'
import { useSnackbar } from 'notistack'

// slots
import { SlotsApi, EarningsApi } from 'apis'

// helpers
import {
	computeTransaction,
	getTimeDifference,
	continousRateCalculation,
	snackbarMesages,
} from 'helpers'

const useParkingPrompt = (
	slotRefetch: () => void,
	earningsRefetch: () => void
) => {
	const { enqueueSnackbar } = useSnackbar()

	const [openLeave, setOpenLeave] = useState(false)
	const [awaitingResponse, setAwaitingResponse] = useState(false)
	const [leaveTargetId, setLeaveTargetId] = useState(0)

	const [openCancelModal, setOpenCancelModal] = useState(false)
	const [cancelTargetId, setCancelTargetId] = useState(0)

	const openModalReservation = (id: number) => {
		setOpenCancelModal(true)
		setCancelTargetId(id)
	}

	const closeModalReservation = () => {
		if (!awaitingResponse) {
			setOpenCancelModal(false)
			setCancelTargetId(0)
		}
	}

	const openModalLeave = (id: number) => {
		setOpenLeave(true)
		setLeaveTargetId(id)
	}

	const closeModalLeave = () => {
		if (!awaitingResponse) {
			setOpenLeave(false)
			setLeaveTargetId(0)
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleError = (error: any) => {
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

	const onConfirmCancelReservation = () => {
		setAwaitingResponse(true)
		SlotsApi.leaveSlot(cancelTargetId)
			.then(() => {
				closeModalReservation()
				enqueueSnackbar(snackbarMesages.deleteReservation, {
					variant: 'success',
				})
				slotRefetch()
			})
			.catch((error) => {
				handleError(error)
			})
		setAwaitingResponse(false)
	}

	const onConfirmLeave = async (leaveNow: boolean, leaveTime: string) => {
		setAwaitingResponse(true)

		try {
			if (!leaveTargetId) throw new Error(snackbarMesages.noValidSlot)

			// check slot for validation
			const slot = await SlotsApi.getSlot(leaveTargetId)
			const { parkedType, parkTime, vehicle, type } = _.get(slot, 'data')

			const formatLeaveTime = moment(leaveTime).format()
			if (parkTime >= formatLeaveTime) {
				throw new Error(snackbarMesages.parkTimeValidation)
			}
			// throw error if no car parked
			if (!parkedType || !vehicle) {
				throw new Error(snackbarMesages.noCarParked)
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
			else await SlotsApi.setLeaveSlot(leaveTargetId, formatLeaveTime)

			slotRefetch()
			earningsRefetch()
		} catch (error) {
			handleError(error)
		}

		setAwaitingResponse(false)
	}

	return {
		awaitingResponse,

		openLeave,
		openCancelModal,

		leaveTargetId,
		cancelTargetId,

		openModalReservation,
		closeModalReservation,

		openModalLeave,
		closeModalLeave,

		onConfirmCancelReservation,
		onConfirmLeave,
	}
}

export default useParkingPrompt
