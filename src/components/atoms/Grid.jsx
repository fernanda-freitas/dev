export default function Grid({ children, className = '' }) {
	return <div className={`grid grid-cols-12 gap-16 ${className}`}>{children}</div>
}
