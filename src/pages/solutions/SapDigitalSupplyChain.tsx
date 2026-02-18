import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import RelatedPages from '@/components/shared/RelatedPages'
import CTABand from '@/components/shared/CTABand'
import { Link } from 'react-router-dom'

const SapDigitalSupplyChain = () => (
	<>
		<HeroSection
			title="SAP Digital Supply Chain"
			subtitle="End-to-end supply chain visibility, intelligent planning, and operational excellence — powered by SAP."
			accentLabel="Solutions"
			variant="dark-blue"
		/>

		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				The Challenge
			</h2>
			<h3 className="text-2xl font-bold mb-8">
				Supply Chain Complexity at Scale
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{
						title: 'Demand Volatility',
						desc: 'Unpredictable demand patterns disrupt inventory planning and fulfillment accuracy.',
					},
					{
						title: 'Siloed Operations',
						desc: 'Disconnected systems across procurement, manufacturing, and logistics create blind spots.',
					},
					{
						title: 'Compliance Pressure',
						desc: 'Regulatory and sustainability requirements demand full traceability across supply networks.',
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
				Integrated Supply Chain Transformation
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{[
					'SAP IBP implementation for demand, supply, and S&OP planning',
					'SAP EWM and TM for warehouse and transportation optimization',
					'Digital Manufacturing Cloud for shop floor integration',
					'Supply chain control tower design and deployment',
					'Supplier collaboration and procurement automation',
					'Real-time analytics and exception management dashboards',
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
				title="Related Services & Industries"
				pages={[
					{
						label: 'SAP IBP',
						href: '/services/sap-ibp',
						description: 'Integrated business planning',
					},
					{
						label: 'SAP EWM',
						href: '/services/sap-ewm',
						description: 'Extended warehouse management',
					},
					{
						label: 'Consumer Goods',
						href: '/industries/consumer-goods',
						description: 'Demand-driven supply chains',
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
					Consumer Goods
				</span>
				<h4 className="font-bold mt-2 group-hover:text-accent transition-colors">
					Supply Chain Control Tower for Global FMCG Leader
				</h4>
				<p className="text-sm text-muted-foreground mt-2">
					Real-time visibility across 30+ distribution centers with
					predictive exception management.
				</p>
			</Link>
		</SectionWrapper>

		<CTABand />
	</>
)

export default SapDigitalSupplyChain
