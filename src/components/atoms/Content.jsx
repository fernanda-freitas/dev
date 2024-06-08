import LinkText from '@/components/atoms/LinkText'
import Grid from '@/components/atoms/Grid'

export default function Content() {
	return (
		<Grid className='pt-[50vh] flex flex-col gap-y-[100px]'>
			<div className='col-span-12 640:col-span-8'>
				<span className='copy-default'>
					A frontend developer from São Paulo - Brazil, currently based in Portugal, with a strong connection to design
					arising from a background in the field. Specializing in visual and creative development using cutting-edge
					technologies such as Next.js and React, there is always eagerness to create impactful pieces where excitement
					and precision harmonize as the main driving forces.
				</span>
			</div>
			<div className='col-span-12 640:col-span-6'>
				<span className='copy-default'>
					Currently at <LinkText href='https://v-a.studio/'>v-a studio</LinkText>
				</span>
			</div>
		</Grid>
	)
}
