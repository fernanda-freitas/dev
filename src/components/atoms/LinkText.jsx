import Link from 'next/link'

export default function LinkText({ href, children, target }) {
	return (
		<Link href={href} className='copy-link link-text hoverable' target={target}>
			{children}
		</Link>
	)
}
