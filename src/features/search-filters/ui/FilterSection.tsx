import { FilterChoose } from '@/shared/api/types/Filter'

import { FilterCheckbox } from './FilterCheckbox'

type Props = {
	section: FilterChoose
}

export const FilterSection = ({ section }: Props) => {
	const checkboxes = section.options.map(option => (
		<FilterCheckbox
			key={option.id}
			filterChooseOption={option}
			onChange={() => {}}
		/>
	))

	return (
		<section className="border-b-2 border-gray-400 py-5">
			<h2 className="text-2xl text-gray-800 mb-2">{section.name}</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-5">
				{checkboxes}
			</div>
		</section>
	)
}
