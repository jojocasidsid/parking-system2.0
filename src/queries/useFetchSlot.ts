import { useQuery } from 'react-query'
import moment from 'moment'

import SlotsAPI from 'apis/Slots/SlotsApi'
import { ISlotData } from 'views/Parking/components/Slot/types'

export const useFetchSlot = () =>
	useQuery(['slot'], () => SlotsAPI.list(), {
		onSuccess: async (response) => {
			await Promise.all(
				response.data.map(async (row: ISlotData) => {
					if (row.unparkTime) {
						const dateNow = moment()

						const dateUnparked = moment(row.unparkTime)
						const timeBetween = moment.duration(dateNow.diff(dateUnparked))

						if (Number(timeBetween) >= 0) {
							await SlotsAPI.leaveSlot(row.id)
						}
					}
				})
			)
		},
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		refetchInterval: 10000,
		refetchIntervalInBackground: false,
	})
