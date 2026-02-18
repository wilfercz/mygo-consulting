import { Link } from 'react-router-dom'
import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import ServiceCard from '@/components/shared/ServiceCard'
import CTABand from '@/components/shared/CTABand'
import { ArrowRight } from 'lucide-react'

const industries = [
	{ label: 'Life Sciences', href: '/industries/life-sciences' },
	{ label: 'Consumer Goods', href: '/industries/consumer-goods' },
	{ label: 'Automotive', href: '/industries/automotive' },
	{ label: 'Telecommunications', href: '/industries/telecommunications' },
	{ label: 'Healthcare', href: '/industries/healthcare' },
	{ label: 'Gas and Oil', href: '/industries/gas-and-oil' },
]

const solutions = [
	{
		title: 'SAP Digital Supply Chain',
		desc: 'End-to-end visibility and optimization across your entire supply chain ecosystem.',
		href: '/solutions/sap-digital-supply-chain',
	},
	{
		title: 'Spend Management',
		desc: 'Strategic procurement and spend analytics to drive cost efficiency.',
		href: '/solutions/spend-management',
	},
	{
		title: 'SAP Human Resource Solutions',
		desc: 'Modernize your workforce management with intelligent HR solutions.',
		href: '/solutions/sap-human-resource-solutions',
	},
]

const Home = () => (
	<>
		{/* Hero */}
		<HeroSection
			title="Structured SAP Execution for Complex Enterprises"
			subtitle="Architecture-driven consulting that delivers measurable transformation outcomes across industries and geographies."
			accentLabel="MYGO Consulting"
			ctaLabel="GET IN TOUCH WITH US"
			size="full"
			variant="teal"
		/>

		{/* What We Do */}
		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				What We Do
			</h2>
			<h3 className="text-2xl md:text-3xl font-bold mb-12">
				Enterprise SAP Delivery, End to End
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<ServiceCard
					title="Services"
					description="From SAP Core Enablement to business transformation management — structured execution across the platform."
					href="/services"
				/>
				<ServiceCard
					title="Solutions"
					description="Industry-aligned SAP solutions for supply chain, finance, HR, and beyond."
					href="/solutions"
				/>
				<ServiceCard
					title="Industries"
					description="Deep domain expertise across life sciences, automotive, telecommunications, and more."
					href="/industries"
				/>
			</div>
		</SectionWrapper>

		{/* Architecture-first */}
		<SectionWrapper variant="light">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
						Our Approach
					</h2>
					<h3 className="text-2xl md:text-3xl font-bold mb-6">
						Architecture-First Delivery
					</h3>
					<p className="text-muted-foreground leading-relaxed mb-4">
						Every engagement starts with a clear architectural
						blueprint. We map your enterprise landscape, identify
						integration touchpoints, and build a transformation
						roadmap that minimizes risk and maximizes value.
					</p>
					<p className="text-muted-foreground leading-relaxed">
						Our methodology ensures that SAP implementations align
						with your business strategy — not the other way around.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{[
						{ num: '150+', label: 'Enterprise Projects' },
						{ num: '40+', label: 'SAP Consultants' },
						{ num: '7', label: 'Industry Verticals' },
						{ num: '98%', label: 'Client Retention' },
					].map((stat) => (
						<div
							key={stat.label}
							className="p-6 bg-card border border-border text-center"
						>
							<div className="text-3xl font-bold text-accent mb-1">
								{stat.num}
							</div>
							<div className="text-sm text-muted-foreground">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>

		{/* Featured Industries */}
		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Industries
			</h2>
			<h3 className="text-2xl md:text-3xl font-bold mb-10">
				Industry-Focused SAP Transformation
			</h3>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{industries.map((ind) => (
					<Link
						key={ind.href}
						to={ind.href}
						className="group p-6 border border-border hover:border-accent/30 hover:shadow-md transition-all"
					>
						<h4 className="font-bold group-hover:text-accent transition-colors">
							{ind.label}
						</h4>
						<ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-2" />
					</Link>
				))}
			</div>
		</SectionWrapper>

		{/* Featured Solutions */}
		<SectionWrapper variant="light">
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Solutions
			</h2>
			<h3 className="text-2xl md:text-3xl font-bold mb-10">
				Outcome-Driven SAP Solutions
			</h3>
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

		{/* Proof */}
		<SectionWrapper>
			<h2 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
				Proof
			</h2>
			<h3 className="text-2xl md:text-3xl font-bold mb-10">
				Case Studies
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[1, 2, 3].map((i) => (
					<Link
						key={i}
						to="/portfolio/case-studies/example-case-study"
						className="group block border border-border hover:border-accent/30 hover:shadow-md transition-all overflow-hidden"
					>
						<div className="h-48 bg-mygo-light-blue" />
						<div className="p-6">
							<span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">
								Case Study
							</span>
							<h4 className="font-bold mt-2 group-hover:text-accent transition-colors">
								Enterprise SAP Transformation — Global
								Manufacturer
							</h4>
							<p className="text-sm text-muted-foreground mt-2">
								Delivering a structured S/4HANA migration across
								12 countries with zero downtime.
							</p>
						</div>
					</Link>
				))}
			</div>
		</SectionWrapper>

		<CTABand />
	</>
)

export default Home
