import { useFilterStore } from '@/entities/filter'
import { FilterChoose } from '@/shared/api/types/Filter'

import { FilterCheckbox } from './FilterCheckbox'

type Props = {
	section: FilterChoose
}

export const FilterSection = ({ section }: Props) => {
	const deleteFilter = useFilterStore(store => store.deleteFilter)
	const addFilter = useFilterStore(store => store.addFilter)

	const onToggle = (isChecked: boolean, optionId: string) => {
		if (isChecked) {
			deleteFilter(section.id, optionId)
		} else {
			addFilter(section.id, optionId)
		}
	}

	console.log('section render')

	const checkboxes = section.options.map(option => {
		return (
			<FilterCheckbox
				key={option.id}
				filterChooseOption={option}
				onToggle={onToggle}
				sectionId={section.id}
			/>
		)
	})

	return (
		<section className="border-b-2 border-gray-400 py-5">
			<h2 className="text-2xl text-gray-800 mb-2">{section.name}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-5">
				{checkboxes}
			</div>
		</section>
	)
}
