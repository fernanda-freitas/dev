import Link from 'next/link'

export default function LinkText({ href, children, target }) {
	return (
		<Link href={href} className='link-text hoverable copy-uppercase' target={target}>
			{children}
		</Link>
	)
}
