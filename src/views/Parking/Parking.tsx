import React from 'react'
import { useSnackbar } from 'notistack'
import useFetchSlot from 'queries/useFetchSlot'
import { ISlotData } from 'views/Parking/components/Slot/types'
import LoadingIndicator from 'components/LoadingIndicator'
import Page from 'components/Page'
import useFetchEarnings from 'queries/useFetchEarnings'
import { Typography } from '@mui/material'
import { getSumBykey } from 'helpers'
import Slot from './components/Slot'

import { SlotsWrapper, ParkingWrapper, StyledRoot } from './styles'
import Entrance from './components/Entrance'

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

	const handleLeave = (id: number) => {
		console.log(id)

		slotRefetch()
		earningsRefetch()

		enqueueSnackbar('Something went wrong', {
			variant: 'error',
		})
	}

	if (isLoadingSlot || isLoadingEarnings) {
		return <LoadingIndicator />
	}

	return (
		<Page title='Parking System'>
			<StyledRoot>
				<Typography variant='h1'>
					Earnings: {earningsData && getSumBykey(earningsData.data, 'price')}{' '}
				</Typography>
				<ParkingWrapper>
					<Entrance entranceTitle='West' slotRefetch={slotRefetch} />
					<SlotsWrapper>
						{slotData &&
							slotData.data.map((row: ISlotData, key: number) => (
								<Slot key={key} data={row} handleLeave={(id) => handleLeave(id)} />
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
