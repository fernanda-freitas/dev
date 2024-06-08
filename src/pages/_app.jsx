import '@/styles/main.scss'
import {
	Jost,
	Inter,
	Reddit_Mono,
	Poppins,
	Raleway,
	Plus_Jakarta_Sans,
	DM_Sans,
	Barlow,
	Outfit,
	Space_Grotesk,
	Figtree,
} from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import { Cursor } from '@/components/atoms/Cursor'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600'] }) // Preferida

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Cursor />
			<div className={`${outfit.className}`}>
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	)
}
