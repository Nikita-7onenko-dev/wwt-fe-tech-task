import { useState } from 'react'

import { useFilterStore } from '@/entities/filter/store/filter.store'
import { FilterModalContent } from '@/features/search-filters'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal'

export const App = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const resetAllFilters = useFilterStore(store => store.resetAllFilters)

	return (
		<section className="w-full h-dvh flex flex-col items-center justify-center bg-zinc-400">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				text="Open Filters Config"
				onClick={() => setIsOpenModal(true)}
				variant="apply"
			/>
			{isOpenModal && (
				<Modal
					onClose={() => setIsOpenModal(false)}
					title="Filters"
				>
					<FilterModalContent
						onApply={() => {}}
						onReset={resetAllFilters}
					/>
				</Modal>
			)}
		</section>
	)
}
