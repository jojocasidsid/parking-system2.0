import React from 'react'
import { useSnackbar } from 'notistack'
import { useFetchSlot } from 'queries/useFetchSlot'
import { ISlotData } from 'views/Parking/components/Slot/types'
import LoadingIndicator from 'components/LoadingIndicator'
import Page from 'components/Page'
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

	const handleLeave = (id: number) => {
		console.log(id)

		slotRefetch()

		enqueueSnackbar('Something went wrong', {
			variant: 'error',
		})
	}

	if (isLoadingSlot) {
		return <LoadingIndicator />
	}

	return (
		<Page title='Parking System'>
			<StyledRoot>
				<ParkingWrapper>
					<Entrance entranceTitle='West' slotRefetch={slotRefetch} />
					<SlotsWrapper>
						{slotData &&
							slotData.data.map((row: ISlotData, key: number) => (
								<Slot key={key} data={row} handleLeave={(id) => handleLeave(id)} />
							))}
					</SlotsWrapper>
				</ParkingWrapper>
			</StyledRoot>
		</Page>
	)
}

export default Parking
