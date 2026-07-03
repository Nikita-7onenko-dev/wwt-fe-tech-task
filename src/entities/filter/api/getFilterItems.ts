import { FilterItem } from '@/shared/api/types/Filter'

type FilterResponse = {
	filterItems: FilterItem[]
}

export const getFilterItems = async (
	signal?: AbortSignal
): Promise<FilterItem[]> => {
	const response = await fetch('/filterData.json', { signal })

	if (!response.ok) {
		throw new Error(`HTTP error ${response.status}`)
	}

	const data: FilterResponse = await response.json()

	return data.filterItems
}
