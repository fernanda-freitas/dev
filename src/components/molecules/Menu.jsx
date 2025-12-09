import LinkText from '@/components/atoms/LinkText'
import ThemeButton from '@/components/atoms/ThemeButton'
import AnimatedLogotype from '@/components/atoms/AnimatedLogotype'
import Link from 'next/link'

export default function Menu() {
	return (
		<>
			<AnimatedLogotype />
			<ul className='absolute top-24 right-16 flex gap-x-10 640:gap-x-[32px] items-center'>
				<li>
					<Link href='/about' className='copy-link link-text hoverable'>
						About
					</Link>
				</li>
				<li>
					<LinkText href='mailto:idea.fernanda@gmail.com' target='_self'>
						Contact
					</LinkText>
				</li>
				<li className='hidden 640:block'>
					<ThemeButton />
				</li>
			</ul>
		</>
	)
}
