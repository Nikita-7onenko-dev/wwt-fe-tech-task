import { Button } from '@/shared/ui/Button'

type Props = {
	onApply: () => void
	onCancel: () => void
}

export const ConfirmDialog = ({ onApply, onCancel }: Props) => {
	return (
		<div className="flex justify-center gap-5 flex-wrap-reverse">
			<Button
				text="Use old filter"
				variant="cancel"
				onClick={onCancel}
			/>
			<Button
				text="Apply new filter"
				variant="apply"
				onClick={onApply}
			/>
		</div>
	)
}
