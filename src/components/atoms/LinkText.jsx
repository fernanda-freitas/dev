import Link from 'next/link'

export default function LinkText({ href, children }) {
	return (
		<Link href={href} className='copy-uppercase'>
			{children}
		</Link>
	)
}
