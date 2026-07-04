import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/Button'

type Props = {
	onApply: () => void
	onCancel: () => void
}

export const ConfirmDialog = ({ onApply, onCancel }: Props) => {
	const { t } = useTranslation('common')

	return (
		<div className="flex justify-center gap-5 flex-wrap-reverse">
			<Button
				text={t('cancelButton')}
				variant="cancel"
				onClick={onCancel}
			/>
			<Button
				text={t('confirmButton')}
				variant="apply"
				onClick={onApply}
			/>
		</div>
	)
}
