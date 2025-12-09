"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Logotype from '@/assets/logotype.svg'

export default function AnimatedLogotype() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const atTop = window.scrollY <= 100
      setIsAtTop((prev) => (prev !== atTop ? atTop : prev))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const getWidth = () => {
    if (isMobile) {
      return isAtTop ? "200px" : "100px"
    }
    return isAtTop ? "300px" : "100px"
  }

  return (
    <Link href="/" aria-label="Go back to homepage" className="block sticky top-16 z-50 mix-blend-difference w-fit">
      <motion.div
        initial={{ width: isMobile ? "200px" : "180px" }}
        animate={{ width: getWidth() }}
        transition={{
          duration: .5,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative aspect-[135/76] origin-top-left"
      >
          <Image
            src={Logotype}
            alt="Logotype"
            fill
            className="object-contain grayscale mix-blend-difference"
          />
      </motion.div>
    </Link>
  )
}