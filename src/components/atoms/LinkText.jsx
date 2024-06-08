import Link from 'next/link'

export default function LinkText({ href, children }) {
	return (
		<Link href={href} className='link-text copy-uppercase'>
			{children}
		</Link>
	)
}
