import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export const Cursor = () => {
	const mouse = useRef({ x: 0, y: 0 })
	const delayedMouse = useRef({ x: 0, y: 0 })
	const rafId = useRef(null)
	const circle = useRef()
	const [clicked, setClicked] = useState(false)

	const lerp = (x, y, a) => x * (1 - a) + y * a

	const manageMouseMove = e => {
		const { clientX, clientY } = e

		mouse.current = {
			x: clientX,
			y: clientY,
		}
	}

	const animate = () => {
		const { x, y } = delayedMouse.current

		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.1),
			y: lerp(y, mouse.current.y, 0.1),
		}

		moveCircle(delayedMouse.current.x, delayedMouse.current.y)

		rafId.current = window.requestAnimationFrame(animate)
	}

	const moveCircle = (x, y) => {
		if (circle.current) {
			gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
		}
	}

	const manageMouseDown = () => {
		setClicked(true)
	}

	const manageMouseUp = () => {
		setClicked(false)
	}

	useEffect(() => {
		animate()
		window.addEventListener('mousemove', manageMouseMove)
		window.addEventListener('mousedown', manageMouseDown)
		window.addEventListener('mouseup', manageMouseUp)

		return () => {
			window.removeEventListener('mousemove', manageMouseMove)
			window.removeEventListener('mousedown', manageMouseDown)
			window.removeEventListener('mouseup', manageMouseUp)
		}
	}, [])

	return (
		<motion.div
			style={{ transition: `height 0.1s ease-out, width 0.1s ease-out, filter 0.1s ease-out` }}
			className='top-0 left-0 fixed rounded-full bg-white mix-blend-difference pointer-events-none z-50'
			ref={circle}
			initial={{ opacity: 0, width: 10, height: 10 }}
			animate={{ opacity: 1, width: clicked ? 70 : 20, height: clicked ? 70 : 20 }}
			exit={{ opacity: 0, width: 10, height: 10 }}
			transition={{ duration: 0.05, type: 'linear', ease: 'easeInOut' }}
		></motion.div>
	)
}
