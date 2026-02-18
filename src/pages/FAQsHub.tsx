import { Link } from 'react-router-dom'
import HeroSection from '@/components/shared/HeroSection'
import SectionWrapper from '@/components/shared/SectionWrapper'
import CTABand from '@/components/shared/CTABand'
import { ArrowRight } from 'lucide-react'

const faqCategories = [
	{
		label: 'SAP Services',
		items: ['SAP BTP', 'SAP Core Enablement', 'Migration Services', 'AMS'],
		category: 'services',
	},
	{
		label: 'Solutions',
		items: ['Digital Supply Chain', 'Spend Management', 'HR Solutions'],
		category: 'solutions',
	},
	{
		label: 'Industries',
		items: ['Life Sciences', 'Automotive', 'Healthcare'],
		category: 'industries',
	},
	{
		label: 'General',
		items: ['Engagement Models', 'Pricing', 'Support'],
		category: 'general',
	},
]

const FAQsHub = () => (
	<>
		<HeroSection
			title="Frequently Asked Questions"
			subtitle="Find answers to common questions about our SAP consulting services, solutions, and engagement approach."
			accentLabel="FAQs"
		/>
		<SectionWrapper>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{faqCategories.map((cat) => (
					<div key={cat.label} className="border border-border p-6">
						<h3 className="font-accent text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
							{cat.label}
						</h3>
						<ul className="space-y-3">
							{cat.items.map((item) => (
								<li key={item}>
									<Link
										to={`/resources/faqs/${cat.category}/${item.toLowerCase().replace(/\s+/g, '-')}`}
										className="group flex items-center justify-between text-sm hover:text-accent transition-colors"
									>
										{item}
										<ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</SectionWrapper>
		<CTABand />
	</>
)

export default FAQsHub
