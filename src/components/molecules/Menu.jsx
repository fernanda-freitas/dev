import LinkText from '@/components/atoms/LinkText'
import ThemeButton from '@/components/atoms/ThemeButton'

export default function Menu() {
	return (
		<div className='flex justify-between items-center'>
			<span className='copy-uppercase'>Fernanda Freitas</span>
			<ul className='flex gap-x-10 640:gap-x-16 items-center'>
				<li>
					<LinkText href='mailto:idea.fernanda@gmail.com' target='_self'>
						Email
					</LinkText>
				</li>
				<li>
					<LinkText href='https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/' target='_blank'>
						Linkedin
					</LinkText>
				</li>
				<li>
					<LinkText href='https://github.com/fernanda-freitas' target='_blank'>
						Github
					</LinkText>
				</li>
				<li>
					<LinkText href='https://www.instagram.com/fernanda_freitas_martinez/' target='_blank'>
						Instagram
					</LinkText>
				</li>
				<li className='hidden 640:block'>
					<ThemeButton />
				</li>
			</ul>
		</div>
	)
}
