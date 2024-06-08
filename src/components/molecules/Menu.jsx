import LinkText from '@/components/atoms/LinkText'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function Menu({ items }) {
	const { toggleTheme } = useContext(ThemeContext)

	return (
		<div className='flex justify-between'>
			<span className='copy-uppercase'>Fernanda Freitas</span>
			<ul className='flex gap-16'>
				<li>
					<LinkText href='mailto:idea.fernanda@gmail.com'>Email</LinkText>
				</li>
				<li>
					<LinkText href='https://www.linkedin.com/in/fernanda-freitas-martinez-8b9a792a/'>Linkedin</LinkText>
				</li>
				<li>
					<LinkText href='https://github.com/fernanda-freitas'>Github</LinkText>
				</li>
				<li>
					<LinkText href='https://www.instagram.com/fernanda_freitas_martinez/'>Instagram</LinkText>
				</li>
				<li>
					<button className='copy-uppercase' onClick={toggleTheme}>
						Theme
					</button>
				</li>
			</ul>
		</div>
	)
}
