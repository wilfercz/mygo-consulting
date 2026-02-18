import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import RelatedPages from '@/components/shared/RelatedPages'
import CTABand from '@/components/shared/CTABand'
import { Link } from 'react-router-dom'

const LifeSciences = () => (
	<>
		<HeroSection
			title="SAP for Life Sciences"
			subtitle="Regulatory-ready, compliance-first SAP transformation for pharmaceutical, biotech, and medical device enterprises."
			accentLabel="Industries"
			variant="teal"
		/>

		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Industry Challenges
			</h2>
			<h3 className="text-2xl font-bold mb-8">
				Navigating Complexity in Life Sciences
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{
						title: 'Regulatory Compliance',
						desc: 'FDA, EMA, and GxP requirements demand validated systems with full audit trails.',
					},
					{
						title: 'Clinical Supply Chains',
						desc: 'Temperature-sensitive logistics and serialization create unique supply chain demands.',
					},
					{
						title: 'Data Integrity',
						desc: 'ALCOA+ principles require robust data governance across all SAP touchpoints.',
					},
				].map((c) => (
					<div key={c.title} className="p-6 border border-border">
						<h4 className="font-bold mb-2">{c.title}</h4>
						<p className="text-sm text-muted-foreground">
							{c.desc}
						</p>
					</div>
				))}
			</div>
		</SectionWrapper>

		<SectionWrapper variant="light">
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				What We Deliver
			</h2>
			<h3 className="text-2xl font-bold mb-8">
				Validated SAP Environments for Life Sciences
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{[
					'GxP-validated S/4HANA implementations with audit trail compliance',
					'Serialization and track-and-trace with SAP ATTP',
					'Clinical supply chain optimization with SAP IBP',
					'Quality management integration across manufacturing sites',
					'Regulatory reporting and submission automation',
					'Computer system validation (CSV) documentation and testing',
				].map((item, i) => (
					<div key={i} className="flex items-start gap-3">
						<div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
						<p className="text-sm">{item}</p>
					</div>
				))}
			</div>
		</SectionWrapper>

		<SectionWrapper>
			<RelatedPages
				title="Related Solutions & Services"
				pages={[
					{
						label: 'SAP Digital Supply Chain',
						href: '/solutions/sap-digital-supply-chain',
						description: 'End-to-end supply chain',
					},
					{
						label: 'SAP Product Lifecycle Management',
						href: '/solutions/sap-product-lifecycle-management',
						description: 'Product development to retirement',
					},
					{
						label: 'Tricentis Testing Automation',
						href: '/services/tricentis-testing-automation',
						description: 'Automated validation testing',
					},
				]}
			/>
		</SectionWrapper>

		<SectionWrapper variant="light">
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Proof
			</h2>
			<h3 className="text-2xl font-bold mb-6">Featured Case Study</h3>
			<Link
				to="/portfolio/case-studies/example-case-study"
				className="group block border border-border p-6 hover:border-accent/30 transition-colors max-w-2xl"
			>
				<span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">
					Life Sciences
				</span>
				<h4 className="font-bold mt-2 group-hover:text-accent transition-colors">
					GxP-Validated S/4HANA Migration for Global Pharma
				</h4>
				<p className="text-sm text-muted-foreground mt-2">
					Full SAP landscape modernization with zero audit findings
					across 8 manufacturing sites.
				</p>
			</Link>
		</SectionWrapper>

		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Have Questions?
			</h2>
			<h3 className="text-2xl font-bold mb-4">Life Sciences FAQs</h3>
			<p className="text-muted-foreground mb-6">
				Explore common questions about SAP in regulated life sciences
				environments.
			</p>
			<Link
				to="/resources/faqs"
				className="inline-block px-6 py-2 border border-border hover:border-accent text-sm font-medium hover:text-accent transition-colors"
			>
				View FAQs
			</Link>
		</SectionWrapper>

		<CTABand />
	</>
)

export default LifeSciences
