import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeButton() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<button className='copy-uppercase hoverable' onClick={toggleTheme}>
			{theme == 'dark' ? (
				<svg width='30' height='20' viewBox='0 0 30 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='10' cy='10' r='9.5' stroke='white' stroke-width='1' />
					<circle cx='20' cy='10' r='9.5' stroke='white' stroke-width='1' />
				</svg>
			) : (
				<svg width='30' height='20' viewBox='0 0 30 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='10' cy='10' r='9.5' stroke='black' stroke-width='1' />
					<circle cx='20' cy='10' r='9.5' stroke='black' stroke-width='1' />
				</svg>
			)}
		</button>
	)
}
