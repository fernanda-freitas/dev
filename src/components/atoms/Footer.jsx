export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className='absolute bottom-16 left-16 right-16'>
			<span className='copy-uppercase'>@{year}</span>
		</div>
	)
}
