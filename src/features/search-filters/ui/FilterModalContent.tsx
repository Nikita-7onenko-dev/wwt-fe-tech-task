import { useFilters } from '@/entities/filter'
import { Button } from '@/shared/ui/Button'

import { FilterSection } from './FilterSection'

type Props = {
	onApply: () => void
	onCancel: () => void
}

export const FilterModalContent = ({ onApply, onCancel }: Props) => {
	const { data } = useFilters()

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
					text="Apply"
					onClick={onApply}
					variant="apply"
				/>
				<button
					type="button"
					className="text-[#078691] underline md:absolute right-0 cursor-pointer"
					onClick={onCancel}
				>
					{'Clear all parameters'}
				</button>
			</div>
		</>
	)
}
