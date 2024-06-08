import '@/styles/main.scss'
import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { Cursor } from '@/components/atoms/Cursor'
import { useEffect, useState } from 'react'

const outfit = Outfit({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }) {
	const [isTouchDevice, setIsTouchDevice] = useState(false)

	useEffect(() => {
		if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
			setIsTouchDevice(true)
		}
	}, [])

	return (
		<ThemeProvider>
			{!isTouchDevice && <Cursor />}
			<div className={`${outfit.className}`}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	)
}
