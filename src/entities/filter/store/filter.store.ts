import { create } from 'zustand'

import { selectedFilters } from './types'

interface FilterState {
	appliedFilters: selectedFilters
	draftFilters: selectedFilters
	addFilter: (sectionId: string, optionId: string) => void
	deleteFilter: (sectionId: string, optionId: string) => void
	resetAllFilters: () => void
	commitDraft: () => void
	rollbackDraft: () => void
}

export const useFilterStore = create<FilterState>()(set => ({
	appliedFilters: {},
	draftFilters: {},
	addFilter: (sectionId, optionId) =>
		set(state => ({
			draftFilters: {
				...state.draftFilters,
				[sectionId]: state.draftFilters[sectionId]
					? [...state.draftFilters[sectionId], optionId]
					: [optionId]
			}
		})),
	deleteFilter: (sectionId, optionId) =>
		set(state => ({
			draftFilters: {
				...state.draftFilters,
				[sectionId]:
					state.draftFilters[sectionId]?.filter(item => item !== optionId) || []
			}
		})),
	resetAllFilters: () => set({ draftFilters: {} }),
	commitDraft: () =>
		set(state => ({ appliedFilters: { ...state.draftFilters } })),
	rollbackDraft: () =>
		set(state => ({ draftFilters: { ...state.appliedFilters } }))
}))
