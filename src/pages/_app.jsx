import '@/styles/main.scss'
import { Inter, Reddit_Mono, Poppins, Lato } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const redditMono = Reddit_Mono({ subsets: ['latin'], weight: ['400'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })
const lato = Lato({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }) {
	return (
		<div className={lato.className}>
			<Component {...pageProps} />
		</div>
	)
}
