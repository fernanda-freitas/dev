import LinkText from '@/components/atoms/LinkText'
import Double from '../organisms/Double'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function Content() {
	// const text = "frontend dev. from São Paulo - Brazil, currently based in Portugal, with a strong connection to design arising from a background in the field. I use on a daily basis technologies like Next.js, Tailwind, Strapi, along with various third-party services and helpfull libraries. I am constantly inspired by the desire to create meaningful work, viewing each project as a chance to challenge myself and deliver impactful pieces."
	
	const projects = [
		{
			name: "Petrotec",
			client: "Petrotec Group",
			href:'https://group.petrotec.com/',
			description: "Website para uma produtora independente de filmes.",
			src: "mariosoares.mov",
			year: 2023,
		},
		{
			name: "Rocaline",
			client: "Rocaline ceramics",
			href:'https://rocalineceramics.com/',
			description: "Website para uma produtora independente de filmes.",
			src: "rocaline.mov",
			year: 2023,
		},
		{
			name: "Maus da Fita",
			client: "Maus da Fita",
			href:'https://mausdafita.pt/',
			description: "Website para uma produtora independente de filmes.",
			src: "mausdafita.png",
			year: 2023,
		},
		{
			name: "Good Company Books",
			client: "Good Company",
			href:'https://goodcompanybooks.com/',
			description: "Website para uma produtora independente de filmes.",
			src: "goodcompany2.png",
			year: 2023,
		},
		{
			name: "Everyone",
			client: "Everyone",
			href:'https://www.everyone.film/',
			description: "Website para uma produtora independente de filmes.",
			src: "everyone.png",
			year: 2023,
		},
		{
			name: "Petrotec",
			client: "Petrotec Group",
			href:'https://group.petrotec.com/',
			description: "Website para uma produtora independente de filmes.",
			src: "petrotec2.mov",
			year: 2023,
		},
		{
			name: "Revolution Needles",
			client: "Revolution Needles",
			href:'https://revolutionneedles.com/store/pt',
			description: "Website para uma produtora independente de filmes.",
			src: "revolutionneedles2.mov",
			year: 2023,
		},
		{
			name: "Riverscape",
			client: "Rvierscape",
			href:'https://riverscape.pt/',
			description: "Website para uma produtora independente de filmes.",
			src: "riverscape.png",
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
