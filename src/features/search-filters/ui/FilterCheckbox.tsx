import { useFilterStore } from '@/entities/filter/store/filter.store'
import { FilterChooseOption } from '@/shared/api/types/Filter'

type Props = {
	filterChooseOption: FilterChooseOption
	onToggle: (isChecked: boolean, optionId: string) => void
	sectionId: string
}

export const FilterCheckbox = ({
	filterChooseOption,
	onToggle,
	sectionId
}: Props) => {
	const isChecked = useFilterStore(
		store =>
			store.appliedFilters[sectionId]?.includes(filterChooseOption.id) ?? false
	)

	return (
		<label
			className="flex gap-2 text-gray-700 items-center w-fit"
			htmlFor={filterChooseOption.id}
		>
			<input
				id={filterChooseOption.id}
				type="checkbox"
				onChange={() => onToggle(isChecked, filterChooseOption.id)}
				checked={isChecked}
			/>
			<span>{filterChooseOption.name}</span>
		</label>
	)
}
