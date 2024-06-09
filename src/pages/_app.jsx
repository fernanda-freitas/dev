import '@/styles/main.scss'
import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { Cursor } from '@/components/atoms/Cursor'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const outfit = Outfit({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }) {
	const [isTouchDevice, setIsTouchDevice] = useState(false)

	useEffect(() => {
		if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
			setIsTouchDevice(true)
		}
	}, [])

	return (
		<>
			<Head>
				@
				<link rel='shortcut icon' href='/images/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
			</Head>
			<ThemeProvider>
				{!isTouchDevice && <Cursor />}
				<div className={`${outfit.className}`}>
					<Component {...pageProps} />
				</div>
			</ThemeProvider>
		</>
	)
}
