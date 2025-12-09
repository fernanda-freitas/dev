import '@/styles/main.scss'
import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Lenis from '@studio-freight/lenis'
const outfit = Outfit({ subsets: ['latin'], weight: ['400'] })
import MarginDefault from '@/components/atoms/MarginDefault'
import Menu from '@/components/molecules/Menu'
import Footer from '@/components/atoms/Footer'

export default function App({ Component, pageProps }) {
	const [isTouchDevice, setIsTouchDevice] = useState(false)

	useEffect(() => {
		if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
			setIsTouchDevice(true)
		}
	}, [])

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<>
			<Head>
				<link rel='shortcut icon' href='./favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='./apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='./favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='./favicon-16x16.png' />
			</Head>
			<ThemeProvider>
				<MarginDefault>
					<main className={`${outfit.className}`}>
						<Menu />
						<div className='pt-[20vw]'>
							<Component {...pageProps} />
						</div>
					</main>
					<Footer />
				</MarginDefault>
			</ThemeProvider>
		</>
	)
}
