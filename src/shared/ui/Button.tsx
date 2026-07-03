type Props = {
	text: string
	variant: 'apply' | 'cancel'
	onClick: () => void
}

const styles = {
	apply:
		'text-white bg-[#FF5F00] rounded-2xl py-3 px-10 w-100 md:w-auto cursor-pointer',
	cancel:
		'text-[#474747] text-l bg-white rounded-2xl py-3 px-10 w-100 md:w-auto cursor-pointer border-[#B4B4B4] border-2'
}

export const Button = ({ text, variant, onClick }: Props) => {
	return (
		<button
			type="button"
			className={styles[variant]}
			onClick={onClick}
		>
			{text}
		</button>
	)
}
