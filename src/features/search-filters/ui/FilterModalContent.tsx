import { useTranslation } from 'react-i18next'

import { useFilters } from '@/entities/filter'
import { Button } from '@/shared/ui/Button'

import { FilterSection } from './FilterSection'

type Props = {
	onApply: () => void
	onReset: () => void
}

export const FilterModalContent = ({ onApply, onReset }: Props) => {
	const { data } = useFilters()
	const { t } = useTranslation('common')

	console.log('modal render')

	return (
		<>
			{data?.map(section => (
				<FilterSection
					key={section.id}
					section={section}
				/>
			))}

			<div className="flex justify-center items-center flex-wrap gap-6 relative py-4">
				<Button
					text={t('apply')}
					onClick={onApply}
					variant="apply"
				/>
				<button
					type="button"
					className="text-[#078691] underline md:absolute right-0 cursor-pointer"
					onClick={onReset}
				>
					{t('ClearButton')}
				</button>
			</div>
		</>
	)
}
