import MarginDefault from '@/components/atoms/MarginDefault'
import Menu from '@/components/molecules/Menu'
import Content from '@/components/atoms/Content'
import Footer from '@/components/atoms/Footer'

export default function Home() {
	return (
		<MarginDefault>
			<Menu />
			<Content />
			<Footer />
		</MarginDefault>
	)
}
