import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ServiceCard from '@/components/shared/ServiceCard'
import CTABand from '@/components/shared/CTABand'

const industries = [
	{
		title: 'Life Sciences',
		desc: 'Regulatory compliance, clinical supply chains, and digital lab integration.',
		href: '/industries/life-sciences',
	},
	{
		title: 'Consumer Goods',
		desc: 'Demand-driven supply chains and consumer engagement platforms.',
		href: '/industries/consumer-goods',
	},
	{
		title: 'Automotive',
		desc: 'Connected manufacturing, supplier integration, and quality management.',
		href: '/industries/automotive',
	},
	{
		title: 'Telecommunications',
		desc: 'Network operations, subscriber management, and digital services.',
		href: '/industries/telecommunications',
	},
	{
		title: 'Healthcare',
		desc: 'Patient-centric operations, compliance, and care coordination.',
		href: '/industries/healthcare',
	},
	{
		title: 'Gas and Oil',
		desc: 'Asset-intensive operations, safety compliance, and field management.',
		href: '/industries/gas-and-oil',
	},
	{
		title: 'Chemical',
		desc: 'Process manufacturing, regulatory tracking, and formulation management.',
		href: '/industries/chemical',
	},
]

const IndustriesHub = () => (
	<>
		<HeroSection
			title="Industry-Focused SAP Expertise"
			subtitle="Deep domain knowledge combined with SAP platform mastery — tailored transformation for your vertical."
			accentLabel="Industries"
		/>
		<SectionWrapper>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{industries.map((ind) => (
					<ServiceCard
						key={ind.href}
						title={ind.title}
						description={ind.desc}
						href={ind.href}
					/>
				))}
			</div>
		</SectionWrapper>
		<CTABand />
	</>
)

export default IndustriesHub
