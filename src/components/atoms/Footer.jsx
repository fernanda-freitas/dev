import LinkText from "./LinkText"

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<div className='fixed bottom-16 left-16 right-16 flex justify-between items-center gap-x-2'>
			<div>
				<span className='copy-default'>Personal website</span>
				<span className='copy-default'>@{year}</span>
			</div>
			<div>
			<span className='copy-default'>
					Currently at{' '}
					<LinkText href='https://v-a.studio/' target='_blank'>
						v-a studio
					</LinkText>
				</span>
			</div>
		</div>
	)
}
