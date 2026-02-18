import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ServiceCard from '@/components/shared/ServiceCard'
import CTABand from '@/components/shared/CTABand'

const solutions = [
	{
		title: 'SAP Digital Supply Chain',
		desc: 'Optimize end-to-end supply chain operations with real-time visibility and intelligent planning.',
		href: '/solutions/sap-digital-supply-chain',
	},
	{
		title: 'SAP Product Lifecycle Management',
		desc: 'Manage product development from ideation to retirement.',
		href: '/solutions/sap-product-lifecycle-management',
	},
	{
		title: 'Marketing and Sales (SAP C/4HANA)',
		desc: 'Unified customer experience across marketing, sales, and commerce.',
		href: '/solutions/marketing-sales-sap-c4hana',
	},
	{
		title: 'Spend Management',
		desc: 'Strategic procurement, sourcing, and spend analytics.',
		href: '/solutions/spend-management',
	},
	{
		title: 'SAP Human Resource Solutions',
		desc: 'Modern workforce management and employee experience.',
		href: '/solutions/sap-human-resource-solutions',
	},
	{
		title: 'Asset Management & Maintenance Optimization',
		desc: 'Predictive maintenance and asset performance management.',
		href: '/solutions/asset-management-maintenance-optimization',
	},
]

const SolutionsHub = () => (
	<>
		<HeroSection
			title="Enterprise SAP Solutions"
			subtitle="Outcome-driven solutions aligned to your industry, designed to accelerate transformation and deliver measurable value."
			accentLabel="Solutions"
		/>
		<SectionWrapper>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{solutions.map((sol) => (
					<ServiceCard
						key={sol.href}
						title={sol.title}
						description={sol.desc}
						href={sol.href}
					/>
				))}
			</div>
		</SectionWrapper>
		<CTABand />
	</>
)

export default SolutionsHub
