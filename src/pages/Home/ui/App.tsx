import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { createFilterPayload, useFilterStore } from '@/entities/filter'
import { ConfirmDialog, FilterModalContent } from '@/features/search-filters'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'

type ModalState = 'filterModal' | 'confirm' | 'none'

export const App = () => {
	const [modalState, setModalState] = useState<ModalState>('none')

	const resetAllFilters = useFilterStore(store => store.resetAllFilters)
	const commitDraft = useFilterStore(store => store.commitDraft)
	const rollbackDraft = useFilterStore(store => store.rollbackDraft)
	const appliedFilters = useFilterStore(store => store.appliedFilters)

	console.log('app render')
	const { t } = useTranslation('common')

	const payload = createFilterPayload(appliedFilters)

	const onApply = () => {
		setModalState('none')
		commitDraft()
	}

	const onCancel = () => {
		setModalState('none')
		rollbackDraft()
	}

	return (
		<section className="w-full flex flex-col gap-10 min-h-screen py-20 px-10 items-center justify-center bg-zinc-400">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				text={t('openFilters')}
				onClick={() => setModalState('filterModal')}
				variant="apply"
			/>
			{modalState === 'filterModal' && (
				<Modal
					onClose={() => setModalState('none')}
					title={t('filterModalTitle')}
				>
					<FilterModalContent
						onApply={() => {
							setModalState('confirm')
						}}
						onReset={resetAllFilters}
					/>
				</Modal>
			)}
			{modalState === 'confirm' && (
				<Modal
					onClose={() => setModalState('none')}
					title={t('confirmModalTitle')}
				>
					<ConfirmDialog
						onApply={onApply}
						onCancel={onCancel}
					/>
				</Modal>
			)}
			<pre className="text-sm sm:text-base">
				{JSON.stringify(payload, null, 2)}
			</pre>
		</section>
	)
}
