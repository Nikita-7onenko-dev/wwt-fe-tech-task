import { FilterChooseOption } from '@/shared/api/types/Filter'

type Props = {
	filterChooseOption: FilterChooseOption
	onChange: () => void
}

export const FilterCheckbox = ({ filterChooseOption, onChange }: Props) => {
	return (
		<label
			className="flex gap-2 text-gray-700 items-center w-fit"
			htmlFor={filterChooseOption.id}
		>
			<input
				id={filterChooseOption.id}
				type="checkbox"
				onChange={onChange}
			/>
			<span>{filterChooseOption.name}</span>
		</label>
	)
}
