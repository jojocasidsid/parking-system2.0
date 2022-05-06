import { useQuery } from 'react-query'

import EarningsApi from 'apis/Earnings/EarningsApi'

const useFetchEarnings = () =>
	useQuery(['earnings'], () => EarningsApi.list(), {
		refetchOnWindowFocus: true,
		refetchOnMount: true,
	})

export default useFetchEarnings
