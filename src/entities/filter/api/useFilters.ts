import { useQuery } from '@tanstack/react-query'

import { getFilterItems } from './getFilterItems'

export const useFilters = () => {
	return useQuery({
		queryKey: ['filterItems'],
		queryFn: async ({ signal }) => getFilterItems(signal),
		staleTime: 60 * 60 * 1000
	})
}
