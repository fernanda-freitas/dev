import LinkText from '@/components/atoms/LinkText'
import Grid from '@/components/atoms/Grid'

export default function Content() {
	return (
		<Grid className='pt-[50vh] flex flex-col gap-y-[100px]'>
			<div className='col-span-12 640:col-span-8'>
				<span className='copy-default'>
					A frontend developer from Brazil, currently based in Portugal, with a strong connection to design due to her
					background in the field. Specialized in visual and interface design, she is always eager to create meaningful
					pieces where creativity and excitement harmonize as the main driving forces.
				</span>
			</div>
			<div className='col-span-12 640:col-span-6'>
				<span className='copy-default'>
					Worked for different studios and agencies - Currently at{' '}
					<LinkText href='https://v-a.studio/'>v-a studio</LinkText>
				</span>
			</div>
		</Grid>
	)
}
