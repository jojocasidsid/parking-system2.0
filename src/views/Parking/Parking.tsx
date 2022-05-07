import React from 'react'

// packages
import { Typography } from '@mui/material'

// queries
import { useFetchSlot, useFetchEarnings } from 'queries'

// helpers
import { getSumBykey } from 'helpers'

// components
import LoadingIndicator from 'components/LoadingIndicator'
import Page from 'components/Page'
import PromptModal from 'components/PromptModal'
import Entrance from './Entrance'
import UnparkDialog from './UnparkDialog'
import Slot from './Slot'

// custom hooks
import useParkingPrompt from './useParkingPrompt'

// interface
import { ISlotData } from './Slot/types'

// styles
import { SlotsWrapper, ParkingWrapper, StyledRoot } from './styles'

const Parking = () => {
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

	const {
		awaitingResponse,
		openLeave,
		openCancelModal,
		leaveTargetId,
		openModalReservation,
		closeModalReservation,
		openModalLeave,
		closeModalLeave,
		onConfirmCancelReservation,
		onConfirmLeave,
	} = useParkingPrompt(slotRefetch, earningsRefetch)

	if (isLoadingSlot || isLoadingEarnings) {
		return <LoadingIndicator />
	}

	return (
		<Page title='Parking System'>
			<UnparkDialog
				open={openLeave}
				slot={leaveTargetId}
				submitting={awaitingResponse}
				handleClose={closeModalLeave}
				onConfirmLeave={onConfirmLeave}
			/>

			<PromptModal
				title='Cancel Reservation'
				message='Are you sure you want to cancel this reservation?'
				open={openCancelModal}
				processing={awaitingResponse}
				handleClose={closeModalReservation}
				handleConfirm={onConfirmCancelReservation}
				paperProps={{ sx: { width: '300px', height: '230px' } }}
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
								<Slot
									key={key}
									data={row}
									handleLeave={(id) => openModalLeave(id)}
									handleCancelReservation={(id) => openModalReservation(id)}
								/>
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
