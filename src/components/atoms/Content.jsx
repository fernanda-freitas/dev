import LinkText from '@/components/atoms/LinkText'
import Grid from '@/components/atoms/Grid'

export default function Content() {
	return (
		<Grid className='pt-[50vh] flex flex-col gap-y-40 640:gap-y-[90px]'>
			<div className='col-span-12 640:col-span-8'>
				<span className='copy-default'>
					A frontend developer from São Paulo - Brazil, currently based in Portugal, with a strong connection to design
					arising from a background in the field. I use on a daily basis technologies like Next.js, Tailwind, Strapi,
					along with various third-party services and helpfull libraries. I am constantly inspired by the desire to
					create meaningful work, viewing each project as a chance to challenge myself and deliver impactful pieces.
				</span>
			</div>
			<div className='col-span-12 640:col-span-6'>
				<span className='copy-default'>
					Currently at{' '}
					<LinkText href='https://v-a.studio/' target='_blank'>
						v-a studio
					</LinkText>
				</span>
			</div>
		</Grid>
	)
}
