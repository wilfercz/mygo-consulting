import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ServiceCard from '@/components/shared/ServiceCard'
import CTABand from '@/components/shared/CTABand'

const categories = [
	{
		group: 'SAP Platform & Core',
		items: [
			{
				title: 'SAP Core Enablement',
				desc: 'Foundation-level SAP configuration and optimization for enterprise operations.',
				href: '/services/sap-core-enablement',
			},
			{
				title: 'SAP BTP',
				desc: 'Extend and integrate your SAP landscape with the Business Technology Platform.',
				href: '/services/sap-btp',
			},
			{
				title: 'SAP Central Finance',
				desc: 'Centralize financial operations for real-time reporting and compliance.',
				href: '/services/sap-central-finance',
			},
		],
	},
	{
		group: 'SAP Supply Chain',
		items: [
			{
				title: 'Digital Supply Chain',
				desc: 'End-to-end supply chain visibility and intelligent planning.',
				href: '/services/digital-supply-chain',
			},
			{
				title: 'Digital Manufacturing Cloud',
				desc: 'Smart manufacturing execution and analytics.',
				href: '/services/digital-manufacturing-cloud',
			},
			{
				title: 'SAP EWM',
				desc: 'Advanced warehouse management for complex logistics.',
				href: '/services/sap-ewm',
			},
			{
				title: 'SAP IBP',
				desc: 'Integrated business planning for demand and supply optimization.',
				href: '/services/sap-ibp',
			},
			{
				title: 'SAP Transportation Management',
				desc: 'Optimize freight, logistics, and carrier management.',
				href: '/services/sap-transportation-management',
			},
		],
	},
	{
		group: 'Transformation & Execution',
		items: [
			{
				title: 'Business Transformation Management',
				desc: 'Structured approach to enterprise-wide SAP transformation.',
				href: '/services/business-transformation-management',
			},
			{
				title: 'Migration Services',
				desc: 'Risk-managed migration from legacy systems to S/4HANA.',
				href: '/services/migration-services',
			},
			{
				title: 'AMS',
				desc: 'Application management services for continuous SAP optimization.',
				href: '/services/ams',
			},
			{
				title: 'Tricentis Testing Automation',
				desc: 'Automated testing for SAP environments.',
				href: '/services/tricentis-testing-automation',
			},
			{
				title: 'User Experience',
				desc: 'Enterprise UX design aligned with SAP Fiori guidelines.',
				href: '/services/user-experience',
			},
		],
	},
]

const ServicesHub = () => (
	<>
		<HeroSection
			title="Comprehensive SAP Services"
			subtitle="From platform enablement to full-scale transformation — structured delivery across every layer of the SAP ecosystem."
			accentLabel="Services"
		/>
		{categories.map((cat) => (
			<SectionWrapper key={cat.group}>
				<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
					{cat.group}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
					{cat.items.map((item) => (
						<ServiceCard
							key={item.href}
							title={item.title}
							description={item.desc}
							href={item.href}
						/>
					))}
				</div>
			</SectionWrapper>
		))}
		<CTABand />
	</>
)

export default ServicesHub
