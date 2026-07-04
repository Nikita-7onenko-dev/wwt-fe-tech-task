import { createPortal } from 'react-dom'

import { CloseButton } from './CloseButton'

type Props = {
	title: string
	children: React.ReactNode
	onClose: () => void
}

export const Modal = ({ title, children, onClose }: Props) => {
	const modalRoot = document.getElementById('modal-root')

	if (!modalRoot) {
		return null
	}

	return createPortal(
		<div
			className="fixed backdrop-blur-2xl inset-0 flex justify-center align-center py-20 overflow-auto"
			onClick={onClose}
		>
			<div
				className="relative bg-white w-[90%] rounded-2xl p-6 z-100 h-fit flex flex-col min-h-50 justify-between gap-15"
				onClick={e => e.stopPropagation()}
			>
				<div>
					<h2 className="text-3xl text-center">{title}</h2>
					<CloseButton onClose={onClose} />
				</div>

				{children}
			</div>
		</div>,
		modalRoot
	)
}
