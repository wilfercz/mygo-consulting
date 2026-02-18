import { Link } from 'react-router-dom'
import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import CTABand from '@/components/shared/CTABand'

const caseStudies = [
	{
		title: 'Global Manufacturer S/4HANA Migration',
		industry: 'Automotive',
		href: '/portfolio/case-studies/example-case-study',
	},
	{
		title: 'Life Sciences Supply Chain Optimization',
		industry: 'Life Sciences',
		href: '/portfolio/case-studies/example-case-study',
	},
	{
		title: 'Telecom Digital Transformation',
		industry: 'Telecommunications',
		href: '/portfolio/case-studies/example-case-study',
	},
	{
		title: 'Consumer Goods Demand Planning',
		industry: 'Consumer Goods',
		href: '/portfolio/case-studies/example-case-study',
	},
	{
		title: 'Chemical Process Manufacturing',
		industry: 'Chemical',
		href: '/portfolio/case-studies/example-case-study',
	},
	{
		title: 'Healthcare Compliance Platform',
		industry: 'Healthcare',
		href: '/portfolio/case-studies/example-case-study',
	},
]

const CaseStudiesHub = () => (
	<>
		<HeroSection
			title="Case Studies"
			subtitle="Real results from enterprise SAP transformations. Explore how we've helped complex organizations achieve structured execution."
			accentLabel="Portfolio"
		/>
		<SectionWrapper>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{caseStudies.map((cs, i) => (
					<Link
						key={i}
						to={cs.href}
						className="group block border border-border hover:border-accent/30 hover:shadow-md transition-all overflow-hidden"
					>
						<div className="h-40 bg-mygo-light-blue" />
						<div className="p-6">
							<span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">
								{cs.industry}
							</span>
							<h3 className="font-bold mt-2 group-hover:text-accent transition-colors">
								{cs.title}
							</h3>
							<p className="text-sm text-muted-foreground mt-2">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Structured SAP delivery with
								measurable outcomes.
							</p>
						</div>
					</Link>
				))}
			</div>
		</SectionWrapper>
		<CTABand />
	</>
)

export default CaseStudiesHub
