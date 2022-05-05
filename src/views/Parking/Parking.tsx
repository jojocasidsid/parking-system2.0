import React from 'react'
import { useSnackbar } from 'notistack'
import { useFetchSlot } from 'hooks/useFetchSlot'
import { ISlotData } from 'views/Parking/components/Slot/types'
import LoadingIndicator from 'components/LoadingIndicator'
import Slot from './components/Slot'

import { SlotsWrapper, ParkingWrapper, StyledRoot } from './styles'

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
		<StyledRoot>
			<ParkingWrapper>
				<SlotsWrapper>
					{slotData &&
						slotData.data.map((row: ISlotData, key: number) => (
							<Slot key={key} data={row} handleLeave={(id) => handleLeave(id)} />
						))}
				</SlotsWrapper>
			</ParkingWrapper>
		</StyledRoot>
	)
}

export default Parking
