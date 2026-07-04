import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/entities/filter'
import { ConfirmDialog, FilterModalContent } from '@/features/search-filters'
import { FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'

export const App = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
	const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false)

	const resetAllFilters = useFilterStore(store => store.resetAllFilters)
	const commitDraft = useFilterStore(store => store.commitDraft)
	const rollbackDraft = useFilterStore(store => store.rollbackDraft)
	const appliedFilters = useFilterStore(store => store.appliedFilters)

	console.log('app render')
	const { t } = useTranslation('common')

	const convertToPayload = (): SearchRequestFilter => {
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

	const payload = convertToPayload()

	const onApply = () => {
		setIsOpenConfirm(false)
		commitDraft()
	}

	const onCancel = () => {
		setIsOpenConfirm(false)
		rollbackDraft()
	}

	return (
		<section className="w-full h-dvh flex flex-col items-center justify-center bg-zinc-400">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				text={t('openFilters')}
				onClick={() => setIsOpenModal(true)}
				variant="apply"
			/>
			{isOpenModal && (
				<Modal
					onClose={() => setIsOpenModal(false)}
					title={t('filterModalTitle')}
				>
					<FilterModalContent
						onApply={() => {
							setIsOpenConfirm(true)
							setIsOpenModal(false)
						}}
						onReset={resetAllFilters}
					/>
				</Modal>
			)}
			{isOpenConfirm && (
				<Modal
					onClose={() => setIsOpenConfirm(false)}
					title={t('confirmModalTitle')}
				>
					<ConfirmDialog
						onApply={onApply}
						onCancel={onCancel}
					/>
				</Modal>
			)}
			<pre>{JSON.stringify(payload, null, 2)}</pre>
		</section>
	)
}
