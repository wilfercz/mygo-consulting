import { Link } from 'react-router-dom'
import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import RelatedPages from '@/components/shared/RelatedPages'
import CTABand from '@/components/shared/CTABand'

const ExampleCaseStudy = () => (
	<>
		<HeroSection
			title="Enterprise S/4HANA Migration for Global Automotive Manufacturer"
			accentLabel="Case Study — Automotive"
			variant="dark-blue"
			size="medium"
		/>

		<SectionWrapper>
			<div className="max-w-3xl mx-auto">
				<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
					The Challenge
				</h2>
				<h3 className="text-2xl font-bold mb-6">
					Legacy Complexity Across 12 Countries
				</h3>
				<p className="text-muted-foreground leading-relaxed mb-4">
					A global automotive manufacturer operating across 12
					countries faced critical challenges with their aging SAP ECC
					landscape. Fragmented instances, inconsistent master data,
					and manual integration processes were driving up operational
					costs and limiting their ability to respond to market
					changes.
				</p>
				<p className="text-muted-foreground leading-relaxed">
					The organization needed a structured migration path to
					S/4HANA that would unify operations, enable real-time
					analytics, and position them for digital supply chain
					transformation — all without disrupting active production
					environments.
				</p>
			</div>
		</SectionWrapper>

		<SectionWrapper variant="light">
			<div className="max-w-3xl mx-auto">
				<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
					Our Approach
				</h2>
				<h3 className="text-2xl font-bold mb-6">
					Architecture-First Migration
				</h3>
				<div className="space-y-4">
					{[
						'Comprehensive landscape assessment and harmonization roadmap',
						'Phased migration strategy with parallel production safeguards',
						'Master data governance framework implementation',
						'SAP BTP integration layer for third-party system connectivity',
						'Automated regression testing with Tricentis for validation',
						'Change management and training program across all regions',
					].map((item, i) => (
						<div key={i} className="flex items-start gap-3">
							<div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
							<p className="text-sm">{item}</p>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>

		<SectionWrapper>
			<div className="max-w-3xl mx-auto">
				<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
					The Outcome
				</h2>
				<h3 className="text-2xl font-bold mb-8">
					Measurable Enterprise Impact
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{
							metric: '40%',
							label: 'Reduction in operational costs',
						},
						{
							metric: '0',
							label: 'Production downtime during migration',
						},
						{
							metric: '12',
							label: 'Countries unified on single instance',
						},
					].map((r) => (
						<div
							key={r.label}
							className="p-6 border border-border text-center"
						>
							<div className="text-3xl font-bold text-accent mb-1">
								{r.metric}
							</div>
							<div className="text-sm text-muted-foreground">
								{r.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>

		<SectionWrapper variant="light">
			<RelatedPages
				title="Related"
				pages={[
					{
						label: 'Migration Services',
						href: '/services/migration-services',
					},
					{ label: 'SAP BTP', href: '/services/sap-btp' },
					{ label: 'Automotive', href: '/industries/automotive' },
				]}
			/>
		</SectionWrapper>

		<CTABand
			headline="Facing a Similar Challenge?"
			subtext="Let's discuss how MYGO can deliver structured SAP transformation for your organization."
		/>
	</>
)

export default ExampleCaseStudy
