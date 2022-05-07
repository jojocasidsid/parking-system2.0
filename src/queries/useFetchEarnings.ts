import { useQuery } from 'react-query'

import EarningsApi from 'apis/Earnings/EarningsApi'
import { queryKeyHelper } from 'helpers'

const useFetchEarnings = () =>
	useQuery([queryKeyHelper.earnings], () => EarningsApi.list(), {
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		refetchInterval: 10000,
		refetchIntervalInBackground: false,
	})

export default useFetchEarnings
