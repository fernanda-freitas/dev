import LinkText from '@/components/atoms/LinkText'
import Double from '../organisms/Double'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function Content() {
	// const text = "frontend dev. from São Paulo - Brazil, currently based in Portugal, with a strong connection to design arising from a background in the field. I use on a daily basis technologies like Next.js, Tailwind, Strapi, along with various third-party services and helpfull libraries. I am constantly inspired by the desire to create meaningful work, viewing each project as a chance to challenge myself and deliver impactful pieces."
	
	const projects = [
		{
			name: "Mário Soares and Maria Barroso",
			client: "Mário Soares and Maria Barroso Foundation",
			href:'https://fmsoaresbarroso.pt/en',
			description: "Multilingual cultural institution website focused on content, accessibility, and Lisbon's cultural promotion.",
			src: "dev/mariosoares.mov",
			year: 2025,
		},
		{
			name: "Rocaline",
			client: "Rocaline ceramics",
			href:'https://rocalineceramics.com/',
			description: "Brand showcase website to showcase handcrafted ceramics from Rocaline.",
			src: "dev/rocaline.mov",
			year: 2024,
		},
		{
			name: "Maus da Fita",
			client: "Maus da Fita",
			href:'https://mausdafita.pt/',
			description: "Portfolio website for an audiovisual studio in Lisbon.",
			src: "dev/mausdafita.png",
			year: 2023,
		},
		{
			name: "Good Company Books",
			client: "Good Company",
			href:'https://goodcompanybooks.com/',
			description: "Independent bookshop website combining editorial content with online commerce.",
			src: "dev/goodcompany2.png",
			year: 2024,
		},
		{
			name: "Handpicked Guide",
			client: "Handpicked",
			href:'https://handpickedguide.com/',
			description: "Curated travel guide platform with map-based exploration and local recommendations.",
			src: "dev/handpickedguide.png",
			year: 2025,
		},
		{
			name: "Petrotec",
			client: "Petrotec Group",
			href:'https://group.petrotec.com/',
			description: "Corporate website for a global energy and mobility technology group.",
			src: "dev/petrotec2.mov",
			year: 2025,
		},
		{
			name: "Revolution Needles",
			client: "Revolution Needles",
			href:'https://revolutionneedles.com/store/pt',
			description: "E-commerce website for a premium tattoo supplies brand.",
			src: "dev/revolutionneedles2.mov",
			year: 2024,
		},
		{
			name: "Riverscape",
			client: "Rvierscape",
			href:'https://riverscape.pt/',
			description: "Residential real estate website showcasing contemporary architecture and luxury living.",
			src: "dev/riverscape.png",
			year: 2023,
		},
	]

	const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -200]),
        { damping: 15 }
    )
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -150]),
        { damping: 15 }
    )
    const y3 = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -200]),
        { damping: 15 }
    )

	return (
		<div ref={containerRef} className='flex flex-col gap-y-[40px] 768:gap-y-[10vh] pt-[10vh]'>
			<Double projects={[projects[0], projects[1]]} />
			<Double projects={[projects[2], projects[3]]} reversed={true}/>
			<Double projects={[projects[4], projects[5]]} />
			<Double projects={[projects[6], projects[7]]} reversed={true}/>
		</div>
	)
}
