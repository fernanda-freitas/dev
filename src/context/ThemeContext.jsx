import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={` ${theme == 'light' ? 'light-theme' : 'dark-theme'}`} style={{ height: '100%' }}>
				{children}
			</div>
		</ThemeContext.Provider>
	)
}
