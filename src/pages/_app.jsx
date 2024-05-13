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

const inter = Inter({ subsets: ['latin'], weight: ['500'] })
const redditMono = Reddit_Mono({ subsets: ['latin'], weight: ['500'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })
const raleway = Raleway({ subsets: ['latin'], weight: ['500'] })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['500'] })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500'] })
const barlow = Barlow({ subsets: ['latin'], weight: ['500'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['400'] }) // Preferida
const space = Space_Grotesk({ subsets: ['latin'], weight: ['600'] }) // Preferida
const figtree = Figtree({ subsets: ['latin'], weight: ['500'] }) // Preferida

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
