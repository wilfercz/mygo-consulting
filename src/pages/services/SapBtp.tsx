import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import RelatedPages from '@/components/shared/RelatedPages'
import CTABand from '@/components/shared/CTABand'
import { Link } from 'react-router-dom'

const SapBtp = () => (
	<>
		<HeroSection
			title="SAP Business Technology Platform"
			subtitle="Extend, integrate, and innovate on SAP BTP — the foundation for intelligent enterprise architecture."
			accentLabel="Services — SAP Platform & Core"
			variant="teal"
		/>

		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				The Challenge
			</h2>
			<h3 className="text-2xl font-bold mb-8">
				Why Enterprises Need BTP
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{
						title: 'Fragmented Landscapes',
						desc: 'Legacy integrations create data silos and operational friction across departments.',
					},
					{
						title: 'Limited Extensibility',
						desc: 'On-premise customizations block upgrades and reduce agility.',
					},
					{
						title: 'Innovation Barriers',
						desc: 'Without a cloud platform layer, adopting AI, ML, and analytics remains aspirational.',
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
				Architecture-Driven BTP Implementation
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{[
					'BTP architecture design and roadmap development',
					'Integration Suite implementation (CPI, API Management)',
					'Extension application development on Cloud Foundry / Kyma',
					'SAP Analytics Cloud and data intelligence setup',
					'Identity and access management configuration',
					'Migration and cutover planning for BTP-native workflows',
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
				title="Related Services & Solutions"
				pages={[
					{
						label: 'SAP Core Enablement',
						href: '/services/sap-core-enablement',
						description:
							'Foundation SAP configuration and optimization',
					},
					{
						label: 'SAP Central Finance',
						href: '/services/sap-central-finance',
						description: 'Centralized financial operations',
					},
					{
						label: 'Migration Services',
						href: '/services/migration-services',
						description:
							'Structured migration from legacy to S/4HANA',
					},
				]}
			/>
		</SectionWrapper>

		{/* Case study teaser */}
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
					Automotive
				</span>
				<h4 className="font-bold mt-2 group-hover:text-accent transition-colors">
					BTP-Driven Integration for Global Manufacturer
				</h4>
				<p className="text-sm text-muted-foreground mt-2">
					Unified 12 regional ERP instances through SAP Integration
					Suite with zero business disruption.
				</p>
			</Link>
		</SectionWrapper>

		{/* FAQ teaser */}
		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Have Questions?
			</h2>
			<h3 className="text-2xl font-bold mb-4">SAP BTP FAQs</h3>
			<p className="text-muted-foreground mb-6">
				Find answers to common questions about SAP BTP implementation
				and our approach.
			</p>
			<Link
				to="/resources/faqs/services/sap-btp"
				className="inline-block px-6 py-2 border border-border hover:border-accent text-sm font-medium hover:text-accent transition-colors"
			>
				View FAQs
			</Link>
		</SectionWrapper>

		<CTABand />
	</>
)

export default SapBtp
