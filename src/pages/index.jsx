import { Container } from '@/components/atoms/Container'
import MarginYLarge from '@/components/atoms/MarginYLarge'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function Home() {
	const { toggleTheme } = useContext(ThemeContext)

	return (
		<MarginYLarge>
			<Container>
				<h2 className='copy-h1'>
					Hi, I'm frontend developer crafting digital products, rigorous systems and fluid experiences.
				</h2>
				<button onClick={toggleTheme}>change theme</button>
			</Container>
		</MarginYLarge>
	)
}
