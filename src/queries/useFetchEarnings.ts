import { useQuery } from 'react-query'

import EarningsApi from 'apis/Earnings/EarningsApi'
import { queryKeyHelper } from 'helpers'
import { IFilters } from 'hooks/useListingTable'

const useFetchEarnings = (key?: IFilters, filters?: IFilters) =>
	useQuery([queryKeyHelper.earnings, key], () => EarningsApi.list(filters), {
		refetchOnWindowFocus: true,
		refetchOnMount: true,
		refetchInterval: 10000,
		refetchIntervalInBackground: false,
	})

export default useFetchEarnings
