import { FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import { selectedFilters } from '../store/types'

export const createFilterPayload = (
	appliedFilters: selectedFilters
): SearchRequestFilter => {
	return Object.entries(appliedFilters)
		.filter(([, val]) => val.length)
		.reduce<SearchRequestFilter>((acc, item) => {
			const sectionId = item[0]
			const optionsIds = item[1]
			acc.push({
				id: sectionId,
				type: FilterType.OPTION,
				optionsIds
			})
			return acc
		}, [])
}
