import { create } from 'zustand'

interface storeFilters {
	[sectionId: string]: string[]
}

interface FilterState {
	appliedFilters: storeFilters
	addFilter: (sectionId: string, optionId: string) => void
	deleteFilter: (sectionId: string, optionId: string) => void
	resetAllFilters: () => void
}

export const useFilterStore = create<FilterState>()(set => ({
	appliedFilters: {},
	addFilter: (sectionId, optionId) =>
		set(state => ({
			appliedFilters: {
				...state.appliedFilters,
				[sectionId]: state.appliedFilters[sectionId]
					? [...state.appliedFilters[sectionId], optionId]
					: [optionId]
			}
		})),
	deleteFilter: (sectionId, optionId) =>
		set(state => ({
			appliedFilters: {
				...state.appliedFilters,
				[sectionId]:
					state.appliedFilters[sectionId]?.filter(item => item !== optionId) ||
					[]
			}
		})),
	resetAllFilters: () => set({ appliedFilters: {} })
}))
