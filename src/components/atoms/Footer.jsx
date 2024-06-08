export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className='absolute bottom-16 left-16 right-16 flex items-center gap-x-2'>
			<span className='copy-default'>Personal website</span>
			<span className='copy-default'>@{year}</span>
		</div>
	)
}
